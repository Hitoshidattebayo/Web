
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ciaCurriculum',
    title: 'CIA Curriculum',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
            name: 'trainingSystems',
            title: 'Training Systems Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }),
        defineField({
            name: 'courses',
            title: 'Courses',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Course Title' },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Message Circle (Regular ESL)', value: 'MessageCircle' },
                                    { title: 'Graduation Cap (IELTS/TOEIC)', value: 'GraduationCap' },
                                    { title: 'Briefcase (Business)', value: 'Briefcase' },
                                    { title: 'Star (Working Holiday)', value: 'Star' },
                                    { title: 'Users (Family & Junior)', value: 'Users' }
                                ]
                            }
                        },
                        { name: 'description', type: 'text', title: 'Short Description' },
                        { name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Key Features' },
                        {
                            name: 'modalContent',
                            title: 'Detailed Content (Modal)',
                            type: 'array',
                            of: [{ type: 'block' }]
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'CIA Curriculum Content' }
        }
    }
})
