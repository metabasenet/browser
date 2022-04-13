<template>

    <div isHome="true" class="footer_wrap cn" data-v-35696748 data-v-02b3c3b7>

        <el-row :gutter="20">

            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div>
                    <span>{{$t('eFooterBar.link')}}</span>
                    <a href="javascript:void(0);" class="social">
                    <img src="../../assets/images/custom/twitter.png" class="fa fa-twitter">
                    </a>
                    <a href="javascript:void(0);" class="social">
                     <img src="../../assets/images/custom/facebook.png" class="fa fa-twitter">
                    </a>
                    <a :href="this.globalString.githubLink" target="_blank" class="social">                    
                        <img src="../../assets/images/custom/logo.png" class="fa fa-web">                    
                    </a>
                    
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="12">
                <div>
                    <p class="text-center reset">
                    <a :href="this.globalString.githubBrowserLink"  target="_blank"  class="btn btn-default btn-lg btn-gh">
                    <i class="fa fa-github"></i>
                    {{$t('eFooterBar.fork')}}
                    </a>
                    </p>        
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div>
                    <p class="text-right">
                    {{$t('eFooterBar.power')}} <a :href="this.globalString.companyWebsite"  target="_blank" >{{this.globalString.company}} {{$t('eFooterBar.webService')}}</a><br>
                    © 2022 - {{this.globalString.company}}
                    </p>
                </div>
            </el-col>
          
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "eFooterBar"
    }
</script>
