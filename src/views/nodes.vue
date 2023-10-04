<template>
    <v-table style="width: 70%; margin-left: auto; margin-right: auto;">
        <thead>
            <tr>
                <th class="text-left">
                    地址
                </th>
                <th class="text-left">
                    累计收益USDT
                </th>
                <th class="text-left">
                    累计收益MNT
                </th>
                <th class="text-left">
                    名称
                </th>
                <th class="text-left">
                    状态
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in nodes" :key="item.addr">
                <td style="cursor:pointer">{{ strFormat(item.addr) }}</td>
                <td> -- </td>
                <td> {{ item.s }} </td>
                <td>{{ item.name }}</td>
                <td>{{ item.state == 1 ? '挖矿中' : '停止' }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
  
<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//const router = useRouter()

const nodes: any = ref([])

function load() {
    axios.get(`${config.api}nodes/list`).then((ret: any) => {
        nodes.value = ret.data
    })
}

load()


function strFormat(str: string): string {
    return `${str.substring(0, 16)}...${str.substring(str.length - 16)}`
}

/*
function tx(hash: string) {
  router.push(`/tx/${hash}`)
}
 
function address(addr: string) {
  router.push(`/address/${addr}`)
}
*/

</script>
  