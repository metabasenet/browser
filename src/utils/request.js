import axios from 'axios'
import { ElMessage } from 'element-plus'
import pinia from '@/store'
import { useUserStore } from '@/store/user'
import { config } from '@/config/config'
//import.meta.env.VITE_APP_API_URL
//location.hostname == config.main_url?config.main_url:config.test_url
// const flag = sessionStorage.getItem('flag') || 1
let request = axios.create({
    // baseURL: location.hostname == config.domainUser_url?config.main_url:config.test_url,
    baseURL: config.main_url,
    timeout: 15000,
});
request.interceptors.request.use((config) => {

    // let userStore = useUserStore();
    // config.headers['token'] = userStore.token;
    // config.headers.token = localStorage.getItem('token');
    return config
});

request.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    let message = '';
    let status = error.response?.status;
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
            message = error.response?.data.msg || 'Unknown error';
    }
    ElMessage({
        message: message,
        type: 'error',
    });
    return Promise.reject(error);
});

export default request;
