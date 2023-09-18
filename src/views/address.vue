<template>
    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="地址详情">
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item>
                <v-list-item-content class="font-weight-bold">地址余额:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ balacne }}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
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
                    数量
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="obj in txs" :key="obj.id">
                <td @click="tx(obj.hash)">{{ strFormat(obj.hash) }}</td>
                <td @click="address(obj.from)">{{ strFormat(obj.from) }}</td>
                <td @click="address(obj.to)">{{ strFormat(obj.to) }}</td>
                <td>{{ obj.value }}</td>
            </tr>
        </tbody>
        <v-btn variant="text" @click="getUp">
            上一页
        </v-btn>

        <v-btn variant="text" @click="getNext">
            下一页
        </v-btn>
    </v-table>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const balacne = ref(0)
const txs: any = ref([])
const max_id: any = ref(0)
const min_id: any = ref(0)

function getNext() {
    if (min_id.value == 0) {
        return
    }
    axios.get(`${config.api}address/list/${route.params.id}/${min_id.value}/0`).then((ret: any) => {
        txs.value = ret.data
        if (ret.data.length > 0) {
            max_id.value = ret.data[0].id
            min_id.value = ret.data[ret.data.length - 1].id
        } else {
            min_id.value = 0
        }
    })
}

function getUp() {
    if (max_id.value == 0) {
        return
    }
    axios.get(`${config.api}address/list/${route.params.id}/${max_id.value}/1`).then((ret: any) => {
        txs.value = []
        if (ret.data.length > 0) {
            for (let i = ret.data.length - 1; i >= 0; i--) {
                txs.value.push(ret.data[i])
            }
            min_id.value = ret.data[0].id
            max_id.value = ret.data[ret.data.length - 1].id
        } else {
            max_id.value = 0
        }
    })
}

function load() {
    axios.get(`${config.api}address/${route.params.id}`).then((ret: any) => {
        balacne.value = ret.data.balance
    })
    min_id.value = Number.MAX_SAFE_INTEGER
    max_id.value = 0
    getNext()
}

load()

function block(hash: string) {
    router.push(`/block/${hash}`)
}

function tx(hash: string) {
    router.push(`/tx/${hash}`)
}

function address(addr: string) {
    router.push(`/address/${addr}`)
}

function strFormat(str: string): string {
    return `${str.substring(0, 6)}...${str.substring(str.length - 6)}`
}

watch([() => router.currentRoute.value.params], () => {
    load()
})

</script>