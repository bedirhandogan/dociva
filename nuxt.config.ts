// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   modules: ['@vite-pwa/nuxt', '@nuxtjs/google-fonts', '@nuxt/eslint', '@nuxt/icon'],
   pwa: {
      manifest: {
         name: 'Dociva',
         short_name: 'Dociva',
         description:
            'This Progressive Web App lets you upload, read, and manage documents in the cloud. With support for PDF, DOCX, and MD formats, it offers fast access to your files from anywhere and a smooth reading experience.',
         theme_color: '#101010',
         background_color: '#101010',
         display: 'standalone',
         scope: '/',
         start_url: '/',
         icons: [
            {
               src: '/icon-72x72.png',
               sizes: '72x72',
               type: 'image/png',
            },
            {
               src: '/icon-96x96.png',
               sizes: '96x96',
               type: 'image/png',
            },
            {
               src: '/icon-128x128.png',
               sizes: '128x128',
               type: 'image/png',
            },
            {
               src: '/icon-144x144.png',
               sizes: '144x144',
               type: 'image/png',
            },
            {
               src: '/icon-152x152.png',
               sizes: '152x152',
               type: 'image/png',
            },
            {
               src: '/icon-192x192.png',
               sizes: '192x192',
               type: 'image/png',
            },
            {
               src: '/icon-384x384.png',
               sizes: '384x384',
               type: 'image/png',
            },
            {
               src: '/icon-512x512.png',
               sizes: '512x512',
               type: 'image/png',
            },
         ],
      },
      workbox: {
         navigateFallback: '/',
      },
      devOptions: {
         enabled: false,
         type: 'module',
         suppressWarnings: true,
      },
   },
   app: {
      head: {
         htmlAttrs: {
            lang: 'en',
         },
         title: 'Dociva',
         meta: [
            {
               hid: 'description',
               name: 'description',
               content:
                  'This Progressive Web App lets you upload, read, and manage documents in the cloud. With support for PDF, DOCX, and MD formats, it offers fast access to your files from anywhere and a smooth reading experience.',
            },
            {
               hid: 'keywords',
               name: 'keywords',
               content: 'dociva, document, viewer, progressive, web, application',
            },
            {
               property: 'og:title',
               content: 'dociva.app',
            },
            {
               property: 'og:site_name',
               content: 'Dociva',
            },
            {
               property: 'og:description',
               content:
                  'This Progressive Web App lets you upload, read, and manage documents in the cloud. With support for PDF, DOCX, and MD formats, it offers fast access to your files from anywhere and a smooth reading experience.',
            },
            {
               property: 'og:url',
               content: 'https://dociva.app',
            },
            {
               property: 'og:type',
               content: 'website',
            },
            {
               property: 'og:locale',
               content: 'en_US',
            },
            {
               property: 'og:image',
               content: 'https://dociva.app/og-image.png',
            },
            {
               property: 'og:image:width',
               content: '1200',
            },
            {
               property: 'og:image:height',
               content: '630',
            },
            {
               property: 'twitter:title',
               content: 'dociva.app',
            },
            {
               property: 'twitter:site',
               content: '@bedirhandev',
            },
            {
               property: 'twitter:description',
               content:
                  'This Progressive Web App lets you upload, read, and manage documents in the cloud. With support for PDF, DOCX, and MD formats, it offers fast access to your files from anywhere and a smooth reading experience.',
            },
            {
               property: 'twitter:card',
               content: 'summary_large_image',
            },
            {
               property: 'twitter:image',
               content: 'https://dociva.app/og-image.png',
            },
            {
               property: 'twitter:image:width',
               content: '1200',
            },
            {
               property: 'twitter:image:height',
               content: '630',
            },
         ],
         link: [
            {
               rel: 'apple-touch-icon',
               sizes: '180x180',
               href: 'apple-touch-icon.png',
            },
         ],
      },
   },
   googleFonts: {
      preload: true,
      families: {
         Poppins: [300, 400, 500, 600],
      },
   },
});
