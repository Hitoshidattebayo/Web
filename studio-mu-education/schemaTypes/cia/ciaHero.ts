
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaHero',
    title: 'CIA Hero Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'backgroundVideo', title: 'Background Video (File)', type: 'file', options: { accept: 'video/*' } }),
    ],
    preview: {
        prepare() {
            return { title: 'CIA Hero Section Content' }
        }
    }
})
