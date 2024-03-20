<template>
    <div class="error-page">
        <div class="err_not">
            <h1>Sorry!We encountered an unexpected error.</h1>
            <p>Please try back again shortly</p>
            <el-button type="primary" @click="goHome">Back Home</el-button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goHome() {
    router.push('/home');
}
</script>

<style scoped>
.error-page {
    width: 100%;
    height: 100vh;
    text-align: center;
    background-image: url(/404.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 5%;
}

/* .err_not {
    margin-top: 15%;
} */

h1 {
    font-size: 3em;
    font-weight: normal;
    color: #6c757d;
    margin-bottom: 10px;

}

p {
    font-size: 1.5em;
    color: #6c757d;
    margin-bottom: 10px;
}
</style>