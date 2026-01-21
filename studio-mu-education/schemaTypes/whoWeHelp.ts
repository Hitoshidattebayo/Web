import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'whoWeHelp',
    title: 'Who We Help Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'list',
            title: 'Target Audience List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'icon', type: 'string', title: 'Icon Name (e.g., GraduationCap)' },
                        { name: 'color', type: 'string', title: 'Color Hex (e.g., #3498db)' },
                        { name: 'bgColor', type: 'string', title: 'Background Color Hex (e.g., #EBF5FB)' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Who We Help Section Content' }
        }
    }
})
