import { Button } from 'antd'
import React from 'react'
import { Request_order_log, Subscrition_request } from '../../../api/index'
import { getFromLocalStorage, saveToLocalStorage } from '../../../Memorystorage/localstorage';

const Apitestpage = () => {

    console.log('page');

    const request_event = async() =>{
        console.log('sdsd');
        const response = await Subscrition_request()

        if(response.success){
            saveToLocalStorage("KOP-Token",response.data.authentication.token)
        }

        // const token = getFromLocalStorage("KOP-Token")
        // console.log(token);
        console.log(response);         
    }

    const request_orderinfo_event = async() =>{
        console.log('lolol');
        const response = await Request_order_log(["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"])
        console.log(response);         
    }


  return (
    <div>
        <Button onClick={request_event} >
            test
        </Button>

        <Button onClick={request_orderinfo_event} >
            log
        </Button>
    </div>
  )
}

export default Apitestpage