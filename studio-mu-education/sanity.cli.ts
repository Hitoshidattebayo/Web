import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '83x9r4rp',
    dataset: 'production'
  },
  deployment: {
    appId: 'powqxdmkfx0o0cl1u2h78x70',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
