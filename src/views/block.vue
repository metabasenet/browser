<template>
    <v-card style="width: 70%; margin-left: auto; margin-right: auto;" title="区块详情">
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item>
                <v-list-item-content class="font-weight-bold">difficulty:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ difficulty }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">gasLimit:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ gasLimit }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">gasUsed:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ gasUsed }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">hash:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ hash }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">number:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ number }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">parentHash:</v-list-item-content>
                <v-list-item-content class="align-end" @click="block(parentHash)">
                    {{ parentHash }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">timestamp:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content class="font-weight-bold">extraData:</v-list-item-content>
                <v-list-item-content class="align-end">
                    {{ extraData }}
                </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="txid in transactions" :key="txid">
                <v-list-item-content class="font-weight-bold">txid:</v-list-item-content>
                <v-list-item-content class="align-end" @click="tx(txid)">
                    {{ txid }}
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