import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'video', title: 'Video File', type: 'file', options: { accept: 'video/*' } }),
        defineField({ name: 'videoLabel', title: 'Video Label', type: 'string' }),
        defineField({ name: 'ctaButtonText', title: 'CTA Button Text', type: 'string' })
    ],
    preview: {
        prepare() {
            return { title: 'Hero Section Content' }
        }
    }
})
