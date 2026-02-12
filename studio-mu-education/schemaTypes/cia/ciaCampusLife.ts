
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaCampusLife',
    title: 'CIA Campus Life',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'categories',
            title: 'Gallery Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { // Category Name
                            name: 'categoryName',
                            type: 'string',
                            title: 'Category Name',
                            options: {
                                list: [
                                    { title: 'C Mart', value: 'C Mart' },
                                    { title: 'Cafe', value: 'Cafe' },
                                    { title: 'CIA Outside', value: 'CIA Outside' },
                                    { title: 'Class Room', value: 'Class Room' },
                                    { title: 'Conference Room', value: 'Conference Room' },
                                    { title: 'Dining Hall', value: 'Dining Hall' },
                                    { title: 'Gym', value: 'Gym' },
                                    { title: 'Hallway', value: 'Hallway' },
                                    { title: 'IDP Testing Center', value: 'IDP Testing Center' },
                                    { title: 'Karaoke', value: 'Karaoke' },
                                    { title: 'Library', value: 'Library' },
                                    { title: 'Recreation', value: 'Recreation' },
                                    { title: 'Room', value: 'Room' },
                                    { title: 'Swimming Pool', value: 'Swimming Pool' },
                                    { title: 'Teachers Lounge', value: 'Teachers Lounge' },
                                    { title: 'Yoga, Pilates Room', value: 'Yoga, Pilates Room' },
                                    { title: 'Others', value: 'Others' }
                                ]
                            }
                        },
                        { // Images Array
                            name: 'images',
                            title: 'Images',
                            type: 'array',
                            of: [{ type: 'image', options: { hotspot: true } }]
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA Campus Life Content' }
        }
    }
})
