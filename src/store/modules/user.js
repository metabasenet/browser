import { defineStore } from 'pinia';
// import {reqLogin,reqUserInfo} from '@/api/user'
import { SET_TOKEN,SET_USER } from '@/utils/token';
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: SET_USER(),
            // username:'',
            // avatar:'',

        }
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data);
            if (result.code == 200) {
                this.token = result.data.token
                 SET_TOKEN(result.data.token)
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'))
            }
        },
        async userInfo(){
            let reuslt = await reqUserInfo();
            if(reuslt.code == 200){
                this.username = reuslt.data.name;
                this.avatar = reuslt.data.avatar;
            }
        }
    },
    getters: {

    }
})
