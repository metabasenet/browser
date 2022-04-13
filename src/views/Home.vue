<template>
    <div data-server-rendered="true" id="__nuxt">
        <div class="nuxt-progress" style="width:0%;height:3px;background-color:#A3C9FF;opacity:0;"></div>
        <div id="__layout">
            <div class="layout cn btc" data-v-02b3c3b7>
                <!-- top start -->
                <e-top-bar></e-top-bar>
                <!-- top end -->

                <router-view></router-view>
<!--                <router-view v-if="isShow" />--

                <!--  footer start -->
                <e-footer-bar></e-footer-bar>
                <!-- footer end -->

            </div>
        </div>
    </div>

</template>

<script>
    import eTopBar from '../components/public/eTopBar.vue'
    import eFooterBar from "../components/public/eFooterBar.vue"

    export default {
        components: {
            eTopBar,
            eFooterBar
        },
        name: "Home",
        data() {
            return {
                isShow: true
            }
        },
        provide() {
            return {
                reload: this.reload
            }
        },
        methods: {
            reload() {
                this.isShow = false
                this.$nextTick(function () {
                    this.isShow = true
                })
            },
        }
    }
</script>

<style>
    @import url("../assets/css/home.css");
    @import url("../assets/css/index.css");
    @import url("../assets/css/iview.css");
    @import url("../assets/css/custom.css");  
</style>

