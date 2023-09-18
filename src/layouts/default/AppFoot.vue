<template>
    <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
            <a href="https://metabasenet.club" target="_blank">
                <v-btn color="white" variant="text" class="mx-2" rounded="xl">
                    <v-img :width="30" src="@/assets/logo.png"></v-img>
                    MNT
                </v-btn>
            </a>
            <a href="https://github.com/metabasenet" target="_blank">
                <v-btn color="white" variant="text" class="mx-2" rounded="xl">
                    <v-icon icon="mdi-github">
                    </v-icon>
                    github
                </v-btn>
            </a>
            <a href="https://github.com/metabasenet/browser" target="_blank">
                <v-btn color="white" variant="text" class="mx-2" rounded="xl">
                    <v-icon icon="mdi-magnify-scan">
                    </v-icon>
                    scan
                </v-btn>
            </a>

            <a href="https://twitter.com/metabasenet" target="_blank">
                <v-btn color="white" variant="text" class="mx-2" rounded="xl">
                    <v-icon icon="mdi-twitter">
                    </v-icon>
                    Twitter
                </v-btn>
            </a>

            <v-col class="text-center mt-4" cols="12">
                @{{ new Date().getFullYear() }} — <strong>Metabase Network</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const links = ref([
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us',
])

</script>
