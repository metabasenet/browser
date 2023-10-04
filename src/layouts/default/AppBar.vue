<template>
  <v-app-bar color="teal">
    <template v-slot:prepend>
      <v-img style="margin-left: 300px" :width="30" src="@/assets/logo.png"></v-img>
    </template>
    <v-app-bar-title @click="home" style="cursor:pointer;">
      MNT scan
    </v-app-bar-title>
    <v-container style="width: 50%;">
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <v-btn rounded="xl" to="blocks">区块</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn rounded="xl" to="txs">交易</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn rounded="xl" to="nodes">节点</v-btn>
        </v-col>
        <v-col cols="auto">
          <span>价格: <strong class="p">{{ price }} USDT</strong></span>
        </v-col>
      </v-row>
    </v-container>

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
const tab = ref(0)
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
  margin-right: 50px;
}
</style>
