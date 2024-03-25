import axios from 'axios'
import { ElMessage } from 'element-plus'
// 引入用户相关的仓库
import { useUserStore } from '@/store/modules/user';
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 5000,
});
request.interceptors.request.use((config) => {
    // 获取用户相关的小仓库:获取仓库内部token,登录成功后携带给服务器
    // let userStore = useUserStore();
    // config.headers['token'] = userStore.token;
    // config.headers.token = localStorage.getItem('token');
    return config
});

request.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = 'Login failed, please login again';
            break;
        case 403:
            message = 'Have no authority';
            break;
        case 404:
            message = 'The requested address does not exist';
            break;
        case 500:
            message = 'Server internal error';
            break;
        default:
            message = error.response.data.msg || 'Unknown error';
    }
    ElMessage({
        message: message,
        type: 'error',
    });
    return Promise.reject(error);
});

export default request;
