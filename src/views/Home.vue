<template>
  <div class="d-flex justify-center flex-row">
    <v-sheet class="pa-12">
      <v-table>
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
            <td @click="block(item.hash)">{{ strFormat(item.hash) }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.txns }}</td>
            <td>{{ moment(item.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-btn style="float: right;" variant="text" to="blocks">更多区块...</v-btn>
    </v-sheet>
    <v-sheet class="pa-12">
      <v-table>
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
      <v-btn style="float: right;" variant="text" to="txs">更多交易...</v-btn>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'

const router = useRouter()
const blocks: any = ref([])
const txs: any = ref([])

function load() {
  axios.get(`${config.api}block/new`).then((ret: any) => {
    blocks.value = ret.data
    console.log('block', ret.data.length)
  })

  axios.get(`${config.api}tx/new`).then((ret: any) => {
    txs.value = ret.data
    console.log('tx', ret.data.length)
  })
}

function strFormat(str: string): string {
  return `${str.substring(0, 6)}...${str.substring(str.length - 6)}`
}

load()
setInterval(load, 3000)


function block(hash: string) {
  router.push(`/block/${hash}`)
}

function tx(hash: string) {
  router.push(`/tx/${hash}`)
}


function address(addr: string) {
  router.push(`/address/${addr}`)
}

</script>
