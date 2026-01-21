import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'process',
    title: 'Process Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'stepNumber', type: 'number', title: 'Step Number' },
                        { name: 'icon', type: 'string', title: 'Icon Name' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Process Section Content' }
        }
    }
})
