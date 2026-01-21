import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
        defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text' }),
        defineField({ name: 'heroVideoLabel', title: 'Hero Video Label', type: 'string' }),
        defineField({ name: 'heroCtaButtonText', title: 'Hero CTA Button Text', type: 'string' }),

        defineField({ name: 'whoWeHelpTitle', title: 'Who We Help Title', type: 'string' }),

        defineField({ name: 'processTitle', title: 'Process Title', type: 'string' }),

        defineField({ name: 'servicesTitle', title: 'Services Title', type: 'string' }),

        defineField({ name: 'aboutTitle', title: 'About Us Title', type: 'string' }),
        defineField({ name: 'aboutDescription', title: 'About Us Description', type: 'text' }),

        defineField({ name: 'ctaTitle', title: 'Final CTA Title', type: 'string' }),
        defineField({ name: 'ctaButtonText', title: 'Final CTA Button Text', type: 'string' }),
    ],
})
