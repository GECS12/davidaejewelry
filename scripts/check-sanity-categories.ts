import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN
})

async function checkCategories() {
  try {
    const products = await client.fetch(`*[_type == "product"] { name, category }`)
    console.log('--- Sanity Products and Categories ---')
    if (products.length === 0) {
      console.log('No products found in Sanity.')
    } else {
      products.forEach((p: any) => {
        console.log(`Product: "${p.name}", Category: "${p.category || 'NOT SET'}"`)
      })
    }
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
  }
}

checkCategories()
