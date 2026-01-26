import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About Us Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' })
    ],
    preview: {
        prepare() {
            return { title: 'About Us Section Content' }
        }
    }
})
