import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import type { StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Mu education',

  projectId: '83x9r4rp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home')
              .child(
                S.list()
                  .title('Home Sections')
                  .items([
                    S.listItem()
                      .title('Hero Section')
                      .child(S.document().schemaType('hero').documentId('hero')),
                    S.listItem()
                      .title('Who We Help Section')
                      .child(S.document().schemaType('whoWeHelp').documentId('whoWeHelp')),
                    S.listItem()
                      .title('Process Section')
                      .child(S.document().schemaType('process').documentId('process')),
                    S.listItem()
                      .title('Services Section')
                      .child(S.document().schemaType('services').documentId('services')),
                    S.listItem()
                      .title('About Us Section')
                      .child(S.document().schemaType('about').documentId('about')),
                    S.listItem()
                      .title('Final CTA Section')
                      .child(S.document().schemaType('cta').documentId('cta')),
                    S.listItem()
                      .title('Testimonials Section')
                      .child(S.document().schemaType('testimonials').documentId('testimonials')),
                    S.listItem()
                      .title('Social Proof Section')
                      .child(S.document().schemaType('socialProof').documentId('socialProof')),
                  ])
              ),
            S.listItem()
              .title('Appointment Calendar')
              .child(S.document().schemaType('appointmentCalendar').documentId('appointmentCalendar')),
            // Default list items except the ones we mapped
            ...S.documentTypeListItems().filter(
              (listItem: any) => !['hero', 'whoWeHelp', 'process', 'services', 'about', 'cta', 'testimonials', 'socialProof', 'home', 'appointmentCalendar'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
