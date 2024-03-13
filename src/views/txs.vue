<template>
  <v-table style="width: 70%; margin-left: auto; margin-right: auto;">
    <thead>
      <tr>
        <th class="text-left">
          交易HASH
        </th>
        <th class="text-left">
          from
        </th>
        <th class="text-left">
          to
        </th>
        <th class="text-left">
          时间
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in txs" :key="item.hash">
        <td @click="tx(item.hash)">{{ strFormat(item.hash) }}</td>
        <td @click="address(item.from)">{{ strFormat(item.from) }}</td>
        <td @click="address(item.to)">{{ strFormat(item.to) }}</td>
        <td>{{ moment(item.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-model="page" :length="10" @update:model-value="getTxs"></v-pagination>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
const router = useRouter()

const txs: any = ref([])
const page: any = ref(0)
const total: any = ref(0)

function getTxs() {
  const n = total.value - (page.value - 1) * 12
  axios.get(`${config.api}tx/list/${n + 1}`).then((ret: any) => {
    txs.value = ret.data
  })
}

function load() {
  axios.get(`${config.api}tx/total`).then((ret: any) => {
    total.value = parseInt(ret.data.total)
    page.value = 1
    getTxs()
  })
}

load()

function strFormat(str: string): string {
  return `${str.substring(0, 12)}...${str.substring(str.length - 12)}`
}

function tx(hash: string) {
  router.push(`/tx/${hash}`)
}

function address(addr: string) {
  router.push(`/address/${addr}`)
}

</script>
