import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'services',
    title: 'Services Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'list',
            title: 'Service List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'linkText', type: 'string', title: 'Link Text' },
                        { name: 'icon', type: 'string', title: 'Icon Name' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'color', type: 'string', title: 'Color Hex (e.g., #3498db)' },
                        { name: 'bgColor', type: 'string', title: 'Background Color Hex (e.g., #e3f2fd)' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Services Section Content' }
        }
    }
})
