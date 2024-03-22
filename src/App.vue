<template>
  <div>
    <HeaderWrapper v-if="!shouldHideHeader"></HeaderWrapper>
     <router-view/>
  <FooterWrapper v-if="!shouldHideFooter"></FooterWrapper>
  </div>
</template>

<script>
import HeaderWrapper from './components/HeaderWrapper.vue'
import FooterWrapper from './components/FooterWrapper.vue'
export default {
  name: 'App',
  components: {
    HeaderWrapper,
    FooterWrapper
  },
  computed: {
    shouldHideHeader() {
      return this.$route.meta.hideHeader || this.$route.path === '/404';
    },
    shouldHideFooter() {
      return this.$route.meta.hideFooter || this.$route.path === '/404';
    },
  },

}
</script>

<style>

</style>
