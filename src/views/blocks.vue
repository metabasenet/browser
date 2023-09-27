<template>
  <v-table style="width: 70%; margin-left: auto; margin-right: auto;">
    <thead>
      <tr>
        <th class="text-left">
          区块HASH
        </th>
        <th class="text-left">
          高度
        </th>
        <th class="text-left">
          交易数量
        </th>
        <th class="text-left">
          时间
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in blocks" :key="item.number">
        <td @click="block(item.hash)">{{ item.hash }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.txns }}</td>
        <td>{{ moment(item.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-model="page" :length="10" @update:model-value="getBlocks"></v-pagination>
</template>

<script lang="js" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
const router = useRouter()

const blocks = ref([])
const page = ref(0)
const total = ref(0)

function getBlocks() {
  const n = total.value - (page.value - 1) * 12
  axios.get(`${config.api}block/list/${n + 1}`).then((ret) => {
    blocks.value = ret.data
  })
}

function load() {
  axios.get(`${config.api}block/total`).then((ret) => {
    total.value = parseInt(ret.data.total)
    page.value = 1
    getBlocks()
  })
}

load()

function block(hash) {
  router.push(`/block/${hash}`)
}
</script>
