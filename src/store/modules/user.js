import { defineStore } from 'pinia';
// import {reqLogin} from '@/api/user'
import { SET_TOKEN,SET_USER } from '@/utils/token';
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: SET_USER(),
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
        getters: {

        }
    }
})
