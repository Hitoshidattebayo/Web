import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'socialProof',
    title: 'Social Proof Section',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'list',
            title: 'Reels List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Video Title' },
                        { name: 'author', type: 'string', title: 'Author' },
                        { name: 'views', type: 'string', title: 'Views Count' },
                        { name: 'video', type: 'file', title: 'Video File', options: { accept: 'video/*' } }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Social Proof Section Content' }
        }
    }
})
