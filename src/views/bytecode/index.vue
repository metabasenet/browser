<template>
    {{byteCodes}}
</template>

<script setup>
import { onMounted,ref } from "vue";
import { ethers } from "ethers";
import {config} from '@/config/config'
const byteCodes =ref(null);
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});
onMounted(async() => {
  const provider = new ethers.JsonRpcProvider(config.rpc_testAdress);
    try {
        let byteCode = await provider.getCode(address);
        byteCodes.value = byteCode;
        console.log(byteCode);
        return byteCode;
    } catch (error) {
        console.error('Error fetching bytecode:', error);
        return null;
    }
});
</script>

<style scoped>
</style>