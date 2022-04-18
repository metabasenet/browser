    <template>
    <div>
    <div class="person_img" >
       <!-- <img id="person_img" :src="img_url"  @mouseover="person_info()" @mouseleave="cl_person_info()"/>-->
        <div>{{this.globalString.virtualCurrencyUnit}}</div>
     </div>
    <div v-show="person_con" class="hidden_div" >
         <div>{{userid}}</div>
         <div>setup</div>
         <div>user</div>
         <div>logout</div>
    </div>
    <el-select v-model="langFlag" @change="changeLanguages" 
                :default-first-option="true" :filterable="true"
                style="width: 130px;" placeholder="please language">
        <el-option :key="item.value" v-for="item in language"
                :label="item.label" :value="item.value">
        </el-option>
    </el-select> 
    <div> {{newArray}}</div>

    </div>
    </template>
  

<script>
    export default {
    name:'',
        data(){
            return{
                placeholder:'search',
                token:'',// Judge whether to load the parameters of the home page directly 
                person_con:false,
                userid:'',
                img_url:'https://btc.tokenview.com/icon/btc.png',
                langFlag: 'zh',
                langText:'中文/CN',
            
                language: 
                [
                    {
                        value: 'zh',
                        label: '中文/CN'
                    },
                    {
                        value: 'en',
                        label: '英文/EN'
                    }
                ],
                oldArray:[1,2,2,3],

                newArray:[],

            }
        },
         methods:{
         person_info(){
            this.person_con = true;
            
        },
        
         cl_person_info(){ 
            this.person_con = false;
        },
        changeLanguages() {
            console.log(this.$i18n.locale) 
            this.$i18n.locale = this.langFlag; 
         
           
        },
        arrayOption(){
            newArray=oldArray.from(new Set(Array));
        }
        
        }
       
    }
    </script>