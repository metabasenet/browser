<template>
   <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color" />
  </svg>
</template>

<script setup>
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '20px'
    },
    height: {
        type: String,
        default: '20px'
    },
});
</script>

<style scoped></style>