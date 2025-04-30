import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import BF from '../HMI/KOPFRA5/BF'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'
import Cooling from '../HMI/KOPFRA5/Cooling'
import Filterpress from '../HMI/KOPFRA5/Filterpress'
import Mobulizer12 from '../HMI/KOPFRA5/Mobulizer12'
import Mobulizer3 from '../HMI/KOPFRA5/Mobulizer3'
import Oilfeed from '../HMI/KOPFRA5/Oilfeed'
import Product from '../HMI/KOPFRA5/Product'

let Overall_data, datas = []
let request_state = true, request_count = 0


const K5Card = ({ para }) => {
    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            console.log(request_count);
            if (request_state === true) {
                request_realtime()
                request_count = 0
            }
            request_count = request_count + 1

            if (request_count > 5) {
                request_state = true
            }
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {

        request_state = false
        const response_realtime = await Request_Realtime_HMI(["PRODUCTION"], ["KOPFRA 5"], [])
        request_state = true

        console.log(response_realtime);

        const overall = []

        datas = Merge_parameter_name_and_value_line(response_realtime, ["PRODUCTION"])
        setState(({ count }) => ({ count: count + 1 }));
        console.log(datas);

        console.log(getObjectNames(datas));

    }

    function getObjectNames(jsonObject) {
        return Object.keys(jsonObject);
    }

    return (
        <div>

            <div>
                <HMIWrapper Tab={['Buffer Tank', 'Cooling', 'Filter Press', 'Mobulizer 1&2', 'Mobulizer 3','Oil Feed','Product']}>
                    <BF key={'Buffer Tank'} para={datas}/>
                    <Cooling key={'Cooling'} para={datas}/>
                    <Filterpress key={'Filter Press'} para={datas}/>
                    <Mobulizer12 key={'Mobulizer 1&2'} para={datas}/>
                    <Mobulizer3 key={'Mobulizer 3'} para={datas}/>
                    <Oilfeed key={'Oil Feed'} para={datas}/>
                    <Product key={'Product'} para={datas}/>

                </HMIWrapper>
            </div>

        </div>
    )
}

export default K5Card