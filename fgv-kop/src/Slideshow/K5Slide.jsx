import React, { useEffect, useState } from 'react'
import { Card, Carousel, Spin } from 'antd'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'
import BF from '../HMI/KOPFRA5/BF'
import Cooling from '../HMI/KOPFRA5/Cooling'
import Filterpress from '../HMI/KOPFRA5/Filterpress'
import Mobulizer12 from '../HMI/KOPFRA5/Mobulizer12'
import Mobulizer3 from '../HMI/KOPFRA5/Mobulizer3'
import Oilfeed from '../HMI/KOPFRA5/Oilfeed'
import Product from '../HMI/KOPFRA5/Product'

let Overall_data, datas = []
let request_state = true, request_count = 0

const K5Slide = () => {

    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            // console.log(request_count);

            if (request_state === true) {
                request_realtime()
                request_count = 0
            }
            request_count = request_count + 1

            if (request_count > 3) {
                request_state = true
            }

        }, 8000)


        // console.log('render2');
        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {

        request_state = false
        const response_realtime = await Request_Realtime_HMI(["PRODUCTION"], ["KOPFRA 5"], [])
        request_state = true

        datas = Merge_parameter_name_and_value_line(response_realtime, ["PRODUCTION"])
        setState(({ count }) => ({ count: count + 1 }));
        console.log(datas);
    }


    function getObjectNames(jsonObject) {
        return Object.keys(jsonObject);
    }


    return (
        <div className='container'>
            {/* <Spin spinning={spinning} fullscreen /> */}

            <Carousel autoplay autoplaySpeed={10000}>

                <div>
                    <BF key={'Buffer Tank'} para={datas} />
                </div>
                <div>
                    <Cooling key={'Cooling'} para={datas} />
                </div>
                <div>
                    <Filterpress key={'Filter Press'} para={datas} />
                </div>
                <div>
                    <Mobulizer12 key={'Mobulizer 1&2'} para={datas} />
                </div>
                <div>
                    <Mobulizer3 key={'Mobulizer 3'} para={datas} />
                </div>
                <div>
                    <Oilfeed key={'Oil Feed'} para={datas} />
                </div>
                <div>
                    <Product key={'Product'} para={datas} />
                </div>

            </Carousel>


        </div>
    )
}

export default K5Slide