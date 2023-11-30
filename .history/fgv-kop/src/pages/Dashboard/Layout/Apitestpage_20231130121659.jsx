import { Button } from 'antd'
import React from 'react'
import { Subscrition_request } from '../../../api'

const Apitestpage = () => {



    const request_event = async() =>{
        const response = await Subscrition_request()
        console.log(response);         
    }


  return (
    <div>
        <Button onClick={request_event} >
            test
        </Button>
    </div>
  )
}

export default Apitestpage