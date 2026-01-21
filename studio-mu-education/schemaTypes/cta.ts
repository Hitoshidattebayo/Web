import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'cta',
    title: 'Final CTA Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' })
    ],
    preview: {
        prepare() {
            return { title: 'Final CTA Section Content' }
        }
    }
})
