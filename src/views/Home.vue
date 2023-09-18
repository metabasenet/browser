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
            <td>{{ strFormat(item.hash) }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.txns }}</td>
            <td>{{ moment(item.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}</td>
          </tr>
        </tbody>
      </v-table>
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
            <td>{{ strFormat(item.hash) }}</td>
            <td>{{ strFormat(item.from) }}</td>
            <td>{{ strFormat(item.to) }}</td>
            <td>{{ moment(item.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </div>
</template>

 
<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { ref } from 'vue'
import moment from 'moment'

const blocks: any = ref([])
const txs: any = ref([])
axios.get(`${config.api}block/new`).then((ret: any) => {
  blocks.value = ret.data
  console.log('block', ret.data.length)
})

axios.get(`${config.api}tx/new`).then((ret: any) => {
  txs.value = ret.data
  console.log('tx', ret.data.length)
})

function strFormat(str: string): string {
  return `${str.substring(0, 6)}...${str.substring(str.length - 6)}`
}

</script>
