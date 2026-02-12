
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaIntro',
    title: 'CIA Intro Section',
    type: 'document',
    fields: [
        defineField({ name: 'videoUrl', title: 'Video URL (e.g., YouTube/Vimeo)', type: 'url' }),
        defineField({ name: 'videoFile', title: 'Video File', type: 'file', options: { accept: 'video/*' } }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'features',
            title: 'Features Log',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', type: 'string', title: 'Icon Name' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA Intro Section Content' }
        }
    }
})
