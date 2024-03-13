<template>
    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="交易详情">
        <v-divider></v-divider>
        <v-container>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        Transaction Hash:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ hash }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        status:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ status == '0x1' ? '成功' : '失败' }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        Block:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ blockNumber }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        Method:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ method }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        from:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1" @click="address(to)" style="cursor:pointer">
                        {{ from }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        to:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1" @click="address(to)" style="cursor:pointer">
                        {{ to }}
                    </v-sheet>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        value:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ ethers.formatEther(value) }} MNT
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        gasPrice:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ gasPrice }}
                    </v-sheet>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        Transaction Fee:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ BigNumber(ethers.formatEther(gasPrice * gasUsed)).toFixed(6) }} MNT
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="logs">
        <v-divider></v-divider>
        <v-container v-for="log in logs" :key="log">
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        <v-badge color="info" :content="log.index" inline></v-badge>address:
                    </v-sheet>
                </v-col>
                <v-col cols="10">
                    <v-sheet class="pa-1 ma-1">
                        {{ log.address }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        topics:
                    </v-sheet>
                </v-col>
                <v-col cols="10">
                    <v-sheet class="pa-1 ma-1">
                        {{ log.topics }}
                    </v-sheet>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        data:
                    </v-sheet>
                </v-col>
                <v-col cols="10">
                    <v-sheet class="pa-1 ma-1">
                        {{ log.data }}
                    </v-sheet>
                </v-col>
            </v-row>

            <v-divider></v-divider>
        </v-container>
    </v-card>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

const router = useRouter()
const route = useRoute()

const hash = ref('')
const status = ref('')
const blockNumber = ref(0)
const method = ref('')
const from = ref('')
const to = ref('')
const value = ref(0)
const gasPrice = ref(0)
const gasUsed = ref(0)
const logs : any = ref([])

function load() {
    axios.get(`${config.api}tx/${route.params.id}`).then((ret: any) => {
        const tx_ret = ret.data
        hash.value = tx_ret.tx.hash
        status.value = tx_ret.receipt.status
        blockNumber.value = tx_ret.receipt.blockNumber
        method.value = tx_ret.tx.data.substring(0, 10)
        from.value = tx_ret.tx.from
        to.value = tx_ret.tx.to
        value.value = tx_ret.tx.value
        gasPrice.value = tx_ret.tx.gasPrice
        gasUsed.value = tx_ret.receipt.gasUsed
        logs.value = tx_ret.receipt.logs
    })
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

watch([() => router.currentRoute.value.params], () => {
    load()
})

</script>