import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import { readFile } from 'fs/promises'
import path from 'path'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

type TryOnProductInput = {
  imagePath: string
  title: string
  productType: string
}

type TryOnRequest = {
  userPhoto: string
  products?: TryOnProductInput[]
  productImagePath?: string
  productTitle?: string
  productType?: string
}

function getMime(ext: string): string {
  return ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
    : ext === '.webp' ? 'image/webp' : 'image/png'
}

export async function POST(request: NextRequest) {
  const body: TryOnRequest = await request.json()

  // Normalize single-product to array (backward compat)
  let productList: TryOnProductInput[] = body.products || []
  if (productList.length === 0 && body.productImagePath) {
    productList = [{
      imagePath: body.productImagePath,
      title: body.productTitle || '',
      productType: body.productType || '',
    }]
  }

  if (!body.userPhoto || productList.length === 0) {
    return NextResponse.json(
      { error: 'userPhoto and at least one product are required' },
      { status: 400 }
    )
  }

  const imagesDir = path.join(process.cwd(), 'public', 'images')

  try {
    // Read all product images
    const productImages = await Promise.all(
      productList.map(async (p) => {
        const absPath = path.join(process.cwd(), 'public', p.imagePath)
        if (!absPath.startsWith(imagesDir)) {
          throw new Error(`Invalid image path: ${p.imagePath}`)
        }
        const buffer = await readFile(absPath)
        const ext = path.extname(absPath).toLowerCase()
        return { base64: buffer.toString('base64'), mime: getMime(ext), title: p.title, type: p.productType }
      })
    )

    // Extract user photo base64
    const base64Match = body.userPhoto.match(/^data:([^;]+);base64,(.+)$/)
    if (!base64Match) {
      return NextResponse.json({ error: 'Invalid user photo format' }, { status: 400 })
    }
    const userMime = base64Match[1]
    const userBase64 = base64Match[2]

    // Build prompt
    let prompt: string
    if (productImages.length === 1) {
      prompt = `Virtual try-on: Make the person in the first image wear the ${productImages[0].title} (${productImages[0].type}) shown in the second image. Keep the person's face, body shape, pose, and background exactly the same. Only change their clothing to match the product shown in the second image. The result should look like a natural photo of the person wearing this garment.`
    } else {
      const garmentDescriptions = productImages
        .map((p, i) => `Image ${i + 2}: ${p.title} (${p.type})`)
        .join(', ')
      prompt = `Virtual try-on: Make the person in Image 1 wear ALL of the following garments simultaneously: ${garmentDescriptions}. Dress the person in every garment shown. Keep the person's face, body shape, pose, and background exactly the same. The result should look like a natural photo of the person wearing the complete outfit.`
    }

    const parts = [
      { inlineData: { mimeType: userMime, data: userBase64 } },
      ...productImages.map(p => ({ inlineData: { mimeType: p.mime, data: p.base64 } })),
      { text: prompt },
    ]

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: [{ role: 'user', parts }],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    })

    const responseParts = response.candidates?.[0]?.content?.parts
    if (!responseParts) {
      return NextResponse.json(
        { error: 'No response from the AI model. Please try again.' },
        { status: 500 }
      )
    }

    const imagePart = responseParts.find(p => p.inlineData)
    if (!imagePart?.inlineData) {
      const textPart = responseParts.find(p => p.text)
      return NextResponse.json(
        { error: textPart?.text || 'The AI could not generate a try-on image. Please try with a different photo.' },
        { status: 422 }
      )
    }

    const resultDataUri = `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`

    return NextResponse.json({ success: true, image: resultDataUri })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    console.error('Try-on error:', errorMessage, err)
    return NextResponse.json(
      { error: `Try-on failed: ${errorMessage}` },
      { status: 500 }
    )
  }
}
