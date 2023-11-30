import axios from 'axios';
import { message } from 'antd';

export default function ajax(url, data = {}, type = 'GET', headers = {}) {
  axios.defaults.withCredentials = false;

  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    };

    let promise;

    if (type === 'GET') {
      axiosConfig.params = data;
      promise = axios.get(url, axiosConfig);
    } else {
      promise = axios.post(url, data, axiosConfig);
    }

    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        message.error('Request Fail: ' + error.message);
        console.log(error.message);
      });
  });
}
