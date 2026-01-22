import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string', // Keeping as string to match existing "€850.00 EUR" format for now, or could change to number
      description: 'e.g. €850.00 EUR'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Ring', value: 'Ring'},
          {title: 'Pendant', value: 'Pendant'},
          {title: 'Other', value: 'Other'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', // Simple long text
    }),
    defineField({
        name: 'details',
        title: 'Product Details',
        type: 'object',
        fields: [
            defineField({name: 'gemstone', title: 'Gemstone', type: 'string'}),
            defineField({name: 'accentStone', title: 'Accent Stone', type: 'string'}),
            defineField({name: 'preciousMetal', title: 'Precious Metal', type: 'string'}),
            defineField({name: 'totalWeight', title: 'Total Weight', type: 'string'}),
        ]
    }),
    defineField({
        name: 'available',
        title: 'Available',
        type: 'boolean',
        initialValue: true
    })
  ],
})
