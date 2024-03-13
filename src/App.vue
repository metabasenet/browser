<template>
  <div>
    <HeaderWrapper></HeaderWrapper>
     <!-- 路由出口，根据路径匹配到的组件将在这里被渲染 -->
     <router-view/>
  <FooterWrapper></FooterWrapper>
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
  }
}
</script>

<style>

</style>
