<template>
  <v-app-bar app color="primary" fixed>
    <v-app-bar-title>
      MNT scan
    </v-app-bar-title>
    价格: 1.1U/MNT
    <v-spacer></v-spacer>
    <v-btn text @click="dartSwitch">
      <v-icon>{{ dart }}</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const dart = ref('mdi-white-balance-sunny')
function dartSwitch() {
  if (dart.value == 'mdi-weather-night') {
    dart.value = 'mdi-white-balance-sunny'
    theme.global.name.value = 'light'
  } else {
    dart.value = 'mdi-weather-night'
    theme.global.name.value = 'dark'
  }
}
//
</script>
