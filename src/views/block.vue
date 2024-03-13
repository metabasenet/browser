<template>
    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="区块详情">
        <v-divider></v-divider>
        <v-container>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        difficulty:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ difficulty }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        gasLimit:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ gasLimit }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        gasUsed:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ gasUsed }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        hash:
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
                        number:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ number }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        parentHash:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1" @click="block(parentHash)" style="cursor:pointer">
                        {{ parentHash }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        timestamp:
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-1 ma-1">
                        {{ moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        extraData:
                    </v-sheet>
                </v-col>
                <v-col cols="10">
                    <v-sheet class="pa-1 ma-1">
                        {{ extraData }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row no-gutters v-for="txid in transactions" :key="txid">
                <v-col cols="2">
                    <v-sheet class="pa-1 ma-1 font-weight-medium">
                        txid:
                    </v-sheet>
                </v-col>
                <v-col cols="10">
                    <v-sheet class="pa-1 ma-1">
                        {{ txid }}
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
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

const difficulty = ref(0)
const extraData = ref('')
const gasLimit = ref('')
const gasUsed = ref('')
const hash = ref('')
const miner = ref('')
const nonce = ref('')
const number = ref('')
const parentHash = ref('')
const timestamp = ref(0)
const transactions = ref([])

function load() {
    axios.get(`${config.api}block/${route.params.id}`).then((ret: any) => {
        const b = ret.data
        difficulty.value = b.difficulty
        extraData.value = b.extraData
        gasLimit.value = b.gasLimit
        gasUsed.value = b.gasUsed
        hash.value = b.hash
        miner.value = b.miner
        nonce.value = b.nonce
        number.value = b.number
        parentHash.value = b.parentHash
        timestamp.value = parseInt(b.timestamp)
        transactions.value = b.transactions
        console.log(JSON.stringify(b))
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