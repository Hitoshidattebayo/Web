import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Түгээмэл Асуултууд'
        }),
        defineField({
            name: 'faqs',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Question & Answer',
                    fields: [
                        defineField({
                            name: 'question',
                            type: 'string',
                            title: 'Question',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'answer',
                            type: 'text',
                            title: 'Answer',
                            validation: Rule => Rule.required()
                        })
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'FAQ Section'
            }
        }
    }
})
