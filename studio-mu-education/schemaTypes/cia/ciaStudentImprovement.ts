
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaStudentImprovement',
    title: 'CIA Student Improvement',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA Student Improvement Content' }
        }
    }
})
