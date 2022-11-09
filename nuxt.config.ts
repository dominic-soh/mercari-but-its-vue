// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    app: {
      head: {
        charset: 'utf-16',      
        viewport: 'width=500, initial-scale=1',       
        title: 'メルカリ - 日本最大の売れるフリマサービス',      
        meta: [
          { name: 'description', content: 'My amazing site.' }
        ],
        link: [{href: 'favicon.ico', rel: 'icon'}]
      }
    }
  })
