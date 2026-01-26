import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'appointmentCalendar',
    title: 'Appointment Calendar',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Available Appointment Dates',
            readOnly: true
        }),
        defineField({
            name: 'availableDates',
            title: 'Available Dates',
            description: 'Select dates that are available for appointments',
            type: 'array',
            of: [{ type: 'date' }],
            options: {
                layout: 'grid'
            }
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Appointment Calendar Settings'
            }
        }
    }
})
