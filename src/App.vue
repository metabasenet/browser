<template>
  <div>
    <HeaderWrapper v-if="!shouldHideHeader"></HeaderWrapper>
    <router-view :key="$route.fullPath" />
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
      return this.$route.meta.hideHeader || this.$route.path === '/404' || this.$route.name === 'bytecode';
    },
    shouldHideFooter() {
      return this.$route.meta.hideFooter || this.$route.path === '/404' || this.$route.name === 'bytecode';
    },
  },

}
</script>

<style>
body {
  font-family: "Roboto", system-ui, -apple-system, "Segoe UI", "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.835rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
</style>
