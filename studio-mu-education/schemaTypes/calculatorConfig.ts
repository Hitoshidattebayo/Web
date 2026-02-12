import { defineType, defineField } from 'sanity'

export const calculatorConfig = defineType({
    name: 'calculatorConfig',
    title: 'Calculator Configuration',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Configuration Title',
            type: 'string',
            initialValue: 'Main Pricing Configuration',
        }),
        defineField({
            name: 'courses',
            title: 'Course Pricing',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'course',
                    fields: [
                        { name: 'name', type: 'string', title: 'Course Name' },
                        {
                            name: 'priceList',
                            type: 'array',
                            title: 'Price List',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'weeks', type: 'number', title: 'Weeks' },
                                        { name: 'price', type: 'number', title: 'Price (USD)' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'dormitories',
            title: 'Dormitory Pricing',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'dormitory',
                    fields: [
                        { name: 'name', type: 'string', title: 'Room Type (Internal ID)' },
                        { name: 'label', type: 'string', title: 'Display Label (Mongolian)' },
                        {
                            name: 'priceList',
                            type: 'array',
                            title: 'Price List',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'weeks', type: 'number', title: 'Weeks' },
                                        { name: 'price', type: 'number', title: 'Price (USD)' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
})
