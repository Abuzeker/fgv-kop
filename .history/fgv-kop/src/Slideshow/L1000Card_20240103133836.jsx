import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'
import { Request_Realtime, Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value } from '../DataRequest/LogdataProcess'
import BleachingHMI from '../HMI/L1000/BleachingHMI'


let L1000_deo = {}
let L1000_bleaching = {}

const L1000Card = () => {

    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            request_realtime()
        }, 5000)

        // console.log('render2');
        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {
        const response_HMI_DEO = await Request_Realtime_HMI(["Deodorising"], "L1000", [])
        const response_HMI_Bleaching = await Request_Realtime_HMI(["Bleaching"], "L1000", [])

        // console.log(response_HMI_DEO);
        L1000_deo =  Merge_parameter_name_and_value(response_HMI_DEO)
        L1000_bleaching =  Merge_parameter_name_and_value(response_HMI_Bleaching)

        setState(({ count }) => ({ count: count + 1 }));
    }

    return (
        <div>
            <HMIWrapper Tab={['Deodorising', 'Bleaching', 'Filtration', 'Vacuum']}>
                <Deodorising key={'Deodorising'} value={L1000_deo}/>
                <BleachingHMI key={'Bleaching'}  value={L1000_bleaching}/>
                <Filtration key={'Filtration'} />
                <Vacuum key={'Vacuum'} />
            </HMIWrapper>
        </div>
    )
}

export default L1000Card