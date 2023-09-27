<template>
  <v-app>
    <default-bar />
    <v-main>
      <router-view />
    </v-main>
    <default-foot />
  </v-app>
</template>
<script setup>
import DefaultBar from './components/AppBar.vue'
import DefaultFoot from './components/AppFoot.vue'
</script>