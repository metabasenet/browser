import Vue from "vue";
import axios from "axios";
import router from "../router";
import {
    Message,
    MessageBox
} from 'element-ui'

Vue.prototype.axios = axios

axios.defaults.timeout = 30000; //响应时间

axios.defaults.baseURL = "/api" //默认请求域名

//请求拦截器
axios.interceptors.request.use(request => {

    //提取token 给接口
    request.headers["X-Authorization"] = localStorage.getItem("token") || "";
    //设置我们的来源
    request.headers["X-Authorization-From"] = 1;
    //设置我们的版本
    request.headers["X-Authorization-Version"] = "1.0.0";

    request.headers["Cache-Control"] = "no-cache";



    return request;


}, error => {
    Message.error("请求错误");
});

//响应拦截器
axios.interceptors.response.use(response => {

    let data = response.data;
    //todo 这里还可以做很多的事
    return data;

}, error => {
    console.log(error);
    Message.error("响应错误！！！！");
    return "";
});

const basePost = (url, params, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config).then(res => {
            //判断是否有错误
            //这是与接口配合的，说明当前token 失效了
            if (res.code == -1) {
                localStorage.removeItem("token");
                MessageBox({
                    title: "提示",
                    message: res.msg,
                    confirmButtonText: '确定',
                    callback: () => {
                        router.replace("/login");
                    }
                });
            } else if (res.code == -2) { //员工
                localStorage.removeItem("token");
                MessageBox({
                    title: "提示",
                    message: res.msg,
                    confirmButtonText: '确定',
                    callback: () => {
                        router.replace("/stafflogin");
                    }
                });
            }

            resolve(res);
        }).catch(error => {
            reject(error)
        });
    });
};

const baseGet = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            //判断是否有错误
            //这是与接口配合的，说明当前token 失效了
            if (res.code == -1) {
                //localStorage.removeItem("token");
                localStorage.removeItem("token");
                MessageBox({
                    title: "提示",
                    message: res.msg,
                    confirmButtonText: '确定',
                    callback: () => {
                        router.replace("/login");
                    }
                });
            } else if (res.code == -2) { //员工
                localStorage.removeItem("token");
                MessageBox({
                    title: "提示",
                    message: res.msg,
                    confirmButtonText: '确定',
                    callback: () => {
                        router.replace("/stafflogin");
                    }
                });
            }
            resolve(res);
        }).catch(error => {
            reject(error)
        });
    });
};

export {
    baseGet,
    basePost
};