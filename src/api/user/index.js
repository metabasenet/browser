import request from '@/utils/request'
const API = {
    // LOGIN_URL: '/user/login',
    // USERINFO_URL: '/user/list',
  }

// export const getUserList = (params) => {
//     return request({
//         url: API.USERINFO_URL,
//         method: 'get',
//         params
//     })
// }
export const reqLogin = (data)=> request.post(API.LOGIN_URL,data)
export const reqUserInfo = ()=> request.get(API.USERINFO_URL)