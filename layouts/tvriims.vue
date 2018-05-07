<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '##title## - Tirto.ID Visual Report',
      meta: [
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: '##title## - Tirto.ID Visual Report' },
        { name: 'description', content: '##description##' },
        { name: 'news_keywords', content: '##keywords##' },
        { name: 'keywords', content: '##keywords##' },
        { name: 'alt_image', content: '##alt_image##' },
        { name: 'title_image', content: '##title_image##' },
        { name: 'author', content: 'Tirto.Id' },
        { property: 'fb:pages', content: '1515768312081946,728981797288461' },
        { property: 'fb:app_id', content: '474316002755630' },
        { property: 'og:image', content: '##thumbnail##' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '##title## - Tirto.ID Visual Report' },
        { property: 'og:description', content: '##description##' },
        { property: 'og:url', content: '##canonical##' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '600' },
        { property: 'og:image:height', content: '315' },
        { property: 'og:site_name', content: 'tirto.id' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tirtoid' },
        { name: 'twitter:title', content: '##title## - Tirto.ID Visual Report' },
        { name: 'twitter:description', content: '##description##' },
        { name: 'twitter:image', content: '##thumbnail##' },
        { name: 'twitter:image:src', content: '##thumbnail##' },
        { name: 'thumbnail', content: '##thumbnail##' },
        { name: 'tracker', content: 'gtm' }
      ]
      // link: [
      //   { rel: 'amphtml', href: 'https://amp.tirto.id' + this.$route.path },
      //   { rel: 'canonical', href: 'https://tirto.id' + this.$route.path }
      // ],
    }
  }
}
</script>
