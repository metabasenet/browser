<template>
    
        <div class="menu" @click="itemClick"><a path="" :class="(isActive?'active':'')+' '+ this.$props.itemCalss"><slot name="item-text"></slot></a></div>
    
</template>

<script>

export default {
    name:"BarItem",
    props:{
        path:String,
        itemCalss:String
    },
    data()
    {
        return {
            classname :"active",
        }
    },
    computed:{
        isActive()
        {
            
            if(this.$route.path == "/")
            {
                if(this.path == "/")
                {
                    //console.log(123);
                    return  true;
                }
                else
                {
                    //console.log(456);
                    return false;
                }
                    
            }
            else{
                if(this.path != "/")
                    return this.$route.path.indexOf(this.path)!==-1;
                else
                    return false;
            }
            return false;
            //return this.$route.path.indexOf(this.path)!==-1;
            
        }
    },
    methods:{
        itemClick()
        {
            //this.$router.push({ path: "/temp", query: { path:this.path,param: { }}});
            this.$router.replace(this.path).catch(
                err => {
                    console.log("重复了点击了");
                }
            )
        }
    }

}
</script>
<style>
.menu {
    height: 68px;
    padding-left: 90px;
}

</style>
