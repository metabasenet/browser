import Vue from "vue";
import axios from "axios";
import router from "../router";
import {
    Message,
    MessageBox
} from 'element-ui'

Vue.prototype.axios = axios

axios.defaults.timeout = 30000; // response time 

axios.defaults.baseURL = "/api" // Default request domain name 

// request interceptor 
axios.interceptors.request.use(request => {

    // Extract token to interface 
    request.headers["X-Authorization"] = localStorage.getItem("token") || "";
    // Set our source 
    request.headers["X-Authorization-From"] = 1;
    // Set our version 
    request.headers["X-Authorization-Version"] = "1.0.0";

    request.headers["Cache-Control"] = "no-cache";



    return request;


}, error => {
    Message.error("请求错误");
});

//request interceptor 
axios.interceptors.response.use(response => {

    let data = response.data;
    //todo
    return data;

}, error => {
    console.log(error);
    Message.error("reponse error");
    return "";
});

const basePost = (url, params, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config).then(res => {
            // Determine whether there is an error 
            // This is coordinated with the interface, indicating that the current token is invalid 
            if (res.code == -1) {
                localStorage.removeItem("token");
                MessageBox({
                    title: "Tips",
                    message: res.msg,
                    confirmButtonText: 'OK',
                    callback: () => {
                        router.replace("/login");
                    }
                });
            } else if (res.code == -2) { 
                localStorage.removeItem("token");
                MessageBox({
                    title: "Tips",
                    message: res.msg,
                    confirmButtonText: 'OK',
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
            // Determine whether there is an error 
            //This is coordinated with the interface, indicating that the current token is invalid 
            if (res.code == -1) {
                //localStorage.removeItem("token");
                localStorage.removeItem("token");
                MessageBox({
                    title: "Tips",
                    message: res.msg,
                    confirmButtonText: 'OK',
                    callback: () => {
                        router.replace("/login");
                    }
                });
            } else if (res.code == -2) { 
                localStorage.removeItem("token");
                MessageBox({
                    title: "Tips",
                    message: res.msg,
                    confirmButtonText: 'OK',
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