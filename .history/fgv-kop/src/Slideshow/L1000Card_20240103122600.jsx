import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'
import { Request_Realtime, Request_Realtime_HMI } from '../api'

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
        const response_HMI_DEO = await Request_Realtime_HMI("Deodorising", "L1000", [])
        console.log(response_HMI_DEO);
    }

    return (
        <div>
            <HMIWrapper Tab={['Deodorising', 'Bleaching', 'Filtration', 'Vacuum']}>
                <Deodorising key={'Deodorising'} />
                <Bleaching key={'Bleaching'} />
                <Filtration key={'Filtration'} />
                <Vacuum key={'Vacuum'} />
            </HMIWrapper>
        </div>
    )
}

export default L1000Card