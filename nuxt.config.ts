export default {
  env: {},
  head: {
    title: 'Ideas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3B8070' },
  build: {},
  css: ['@/assets/styles/index.scss'],
  buildModules: ['@nuxt/typescript-build', 'bootstrap-vue/nuxt'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  }
};
