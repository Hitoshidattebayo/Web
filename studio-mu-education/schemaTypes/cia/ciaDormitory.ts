
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaDormitory',
    title: 'CIA Dormitory',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'roomTypes',
            title: 'Room Types',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Room Name (e.g., 1-bed, 2-bed)' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'images', type: 'array', of: [{ type: 'image' }] },
                        { name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Features List' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'amenities',
            title: 'Common Amenities',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', type: 'string', title: 'Icon Name' },
                        { name: 'title', type: 'string', title: 'Title' }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA Dormitory Content' }
        }
    }
})
