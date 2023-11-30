import axios from 'axios'
import { message } from 'antd'


export default function request(url, data = {}, type = 'GET') {
    axios.defaults.withCredentials = true


    return new Promise((resolve, reject) => {
        let promise

        if (type === 'GET') {
            promise = axios.get(url, { params: data })
        } else {
            promise = axios.post(url, data)
        }

        console.log('sdfsdf');
        console.log(promise);

        promise.then(response => {
            console.log(response);

            resolve(response.data)

        }).catch(error => {
            let response ={data:'false'}
            response.data = 'false'
            resolve(response.data)

            message.error('Request Fail: ' + error.message)
        })
    })
}