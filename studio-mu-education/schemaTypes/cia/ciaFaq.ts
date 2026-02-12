
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaFaq',
    title: 'CIA FAQ',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'faqs',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA FAQ Content' }
        }
    }
})
