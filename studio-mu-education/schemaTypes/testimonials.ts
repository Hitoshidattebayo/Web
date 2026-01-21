import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Testimonials Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'list',
            title: 'Testimonials List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Author Name' },
                        { name: 'quote', type: 'text', title: 'Quote' },
                        { name: 'color', type: 'string', title: 'Color Hex' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Testimonials Section Content' }
        }
    }
})
