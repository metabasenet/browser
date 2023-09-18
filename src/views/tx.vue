<template>
    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="交易详情">
        <v-divider></v-divider>

        <v-list dense>
            <v-list-item>
                <v-list-item-content class="font-weight-bold">Transaction Hash:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ hash }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">status:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ status == '0x1' ? '成功' : '失败'}}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">Block:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ blockNumber }}
                </v-list-item-content>
            </v-list-item>


            <v-list-item>
                <v-list-item-content class="font-weight-bold">Method:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ method }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">from:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ from }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">to:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ to }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">value:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ value }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">gasPrice:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ gasPrice }}
                </v-list-item-content>
            </v-list-item>


            <v-list-item>
                <v-list-item-content class="font-weight-bold">Transaction Fee:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ gasPrice * gasUsed }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="log in logs" :key="log" >
                <v-list-item-content class="font-weight-bold">log:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ JSON.stringify(log) }}
                </v-list-item-content>
            </v-list-item>

        </v-list>
    </v-card>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { config } from '@/const/config'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import moment from 'moment'

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
const logs = ref([])

function load() {
    axios.get(`${config.api}tx/${route.params.id}`).then((ret: any) => {
        const tx_ret = ret.data
        hash.value = tx_ret.tx.hash
        status.value = tx_ret.receipt.status
        blockNumber.value = tx_ret.receipt.blockNumber
        method.value = tx_ret.tx.data.substring(0,10)
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

watch([() => router.currentRoute.value.params], () => {
    load()
})

</script>