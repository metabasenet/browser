<template>
  <v-app-bar app color="primary" fixed>
    <template v-slot:prepend>
      <v-img style="margin-left: 300px" :width="30" src="@/assets/logo.png"></v-img>
    </template>
    <v-app-bar-title @click="home" style="cursor:pointer">
      MNT scan
    </v-app-bar-title>

    <div>
      <span>价格:<strong class="p">{{ price }}USDT</strong></span>
    </div>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-btn style="margin-right: 300px" :icon="dart" @click="dartSwitch">
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { ethers } from 'ethers'
import { config } from '@/const/config'
import BigNumber from 'bignumber.js'
import { useRouter } from 'vue-router'
const router = useRouter()

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

const price = ref('')
const provider = new ethers.JsonRpcProvider(config.rpc)
const pair = new ethers.Contract(config.addr_pair, config.abi_pair, provider)
pair.getReserves().then((ret) => {
  const p: any = BigNumber(ret[1]).div(ret[0])
  price.value = p.toFixed(4)
  console.log('price:', price.value)
})

function home() {
  router.push('/')
}
</script>
<style scoped>
.p {
  color: rgba(var(--v-theme-on-something), 0.9);
}
</style>
