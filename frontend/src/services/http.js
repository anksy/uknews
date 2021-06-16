import axios from 'axios';
import { NEWSAPIKEY, BASEPATH } from "../constants";

axios.interceptors.request.use(function (config) {
    config.url = BASEPATH + config.url;

    if (BASEPATH.includes("newsapi.org")) {
        config.headers = {
            "X-Api-Key": NEWSAPIKEY
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    if (!error.response && error.message === 'Network Error') {
        alert("Couldn't connect to server");
        return Promise.reject();
    }
    // Do something with response error
    return Promise.reject(error.response.data);
});


export default class HTTP {
    static request(method, url, data = null) {
        return new Promise((resolve, reject) => {
            axios({
                method,
                url,
                [method === 'get' ? "params" : "data"]: data
            })
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
}