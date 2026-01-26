import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Start Title', type: 'string' }),
                defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'videoLabel', title: 'Video Label', type: 'string' }),
                defineField({ name: 'ctaButtonText', title: 'CTA Button Text', type: 'string' })
            ]
        }),

        defineField({
            name: 'whoWeHelp',
            title: 'Who We Help Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Section Title', type: 'string' }),
                defineField({
                    name: 'list',
                    title: 'Target Audience List',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'icon', type: 'string', title: 'Icon Name (e.g., GraduationCap)' },
                                { name: 'color', type: 'string', title: 'Color Hex (e.g., #3498db)' },
                                { name: 'bgColor', type: 'string', title: 'Background Color Hex (e.g., #EBF5FB)' }
                            ]
                        }
                    ]
                })
            ]
        }),

        defineField({
            name: 'process',
            title: 'Process Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Section Title', type: 'string' }),
                defineField({
                    name: 'steps',
                    title: 'Steps',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'description', type: 'text', title: 'Description' },
                                { name: 'stepNumber', type: 'number', title: 'Step Number' },
                                { name: 'icon', type: 'string', title: 'Icon Name' }
                            ]
                        }
                    ]
                })
            ]
        }),

        defineField({
            name: 'services',
            title: 'Services Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Section Title', type: 'string' }),
                defineField({
                    name: 'list',
                    title: 'Service List',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'linkText', type: 'string', title: 'Link Text' },
                                { name: 'icon', type: 'string', title: 'Icon Name' },
                                { name: 'description', type: 'text', title: 'Description' },
                                { name: 'color', type: 'string', title: 'Color Hex (e.g., #3498db)' },
                                { name: 'bgColor', type: 'string', title: 'Background Color Hex (e.g., #e3f2fd)' }
                            ]
                        }
                    ]
                })
            ]
        }),

        defineField({
            name: 'about',
            title: 'About Us Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Section Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' })
            ]
        }),

        defineField({
            name: 'cta',
            title: 'Final CTA Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Section Title', type: 'string' }),
                defineField({ name: 'buttonText', title: 'Button Text', type: 'string' })
            ]
        }),
    ],
})
