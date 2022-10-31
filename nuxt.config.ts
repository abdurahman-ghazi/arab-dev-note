import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1', 
      title: 'ملاحظات المبرمج',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'هنا ستجد ملاحظاتي المتعلقة بالبرمجة مثل بيئة العمل فيو , رياكت و اخرى قد تساعدك و توفر عليك الوقت.' }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'material-palenight'
    }
  },
  tailwindcss: {
      config: {
          plugins: [tailwindTypography],
      }
  },
  target: 'static',
  router: {
    base: '/arab-webdev/'
  }
})
