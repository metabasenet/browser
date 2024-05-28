import axios from 'axios'
import { ElMessage } from 'element-plus'
import pinia from '@/store'
import { useUserStore } from '@/store/user'
import { config } from '@/config/config'
//import.meta.env.VITE_APP_API_URL
let request = axios.create({
    baseURL: location.hostname == config.domainUser_url?import.meta.env.VITE_MAIN_BASE_URL:import.meta.env.VITE_TEST_BASE_URL,
    timeout: 15000,
});
request.interceptors.request.use((config) => {
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
