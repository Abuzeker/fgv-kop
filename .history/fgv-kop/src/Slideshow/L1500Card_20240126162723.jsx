import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import IceCondes from '../pages/L1500/IceCondes'
import Duo2 from '../pages/L1500/Duo2'
import Vacuum from '../pages/L1500/Vacuum'
import BleachingHMI from '../HMI/L1500/Bleaching_HMI'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value } from '../DataRequest/LogdataProcess'
import G331AHMI from '../HMI/L1000/G331AHMI'
import G331BHMI from '../HMI/L1000/G331BHMI'


let L1500_deo = {}
let L1500_bleaching = {}
let L1500_Vacuum = {}
let L1500_G331A = {}
let L1500_G331B = {}


const L1500Card = () => {


    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            request_realtime()
        }, 3000)



        // console.log('render2');
        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {
        const response_HMI_DEO = await Request_Realtime_HMI(["Deodorising"], "L1500", [])
        const response_HMI_Bleaching = await Request_Realtime_HMI(["Bleaching"], "L1500", [])
        // const response_HMI_Filter = await Request_Realtime_HMI(["Filter"], "L1500", [])
        const response_HMI_Vacuum = await Request_Realtime_HMI(["Vacuum"], "L1500", [])
        const response_HMI_G331A = await Request_Realtime_HMI(["G331A"], "L1500", [])
        const response_HMI_G331B = await Request_Realtime_HMI(["G331B"], "L1500", [])


        console.log(response_HMI_Bleaching);
        L1500_deo =  Merge_parameter_name_and_value(response_HMI_DEO)
        L1500_bleaching =  Merge_parameter_name_and_value(response_HMI_Bleaching)
        L1500_Vacuum =  Merge_parameter_name_and_value(response_HMI_Vacuum)
        L1500_G331A =  Merge_parameter_name_and_value(response_HMI_G331A)
        L1500_G331B =  Merge_parameter_name_and_value(response_HMI_G331B)

        // console.log(L1500_bleaching);



        setState(({ count }) => ({ count: count + 1 }));
    }


    return (
        <div>
            <HMIWrapper Tab={[ 'Deodorization 1', 'Deodorization 2','Ice Codensation', 'Bleaching']}>
                <IceCondes key={'Ice Codensation'}/>
                <BleachingHMI key={'Bleaching'} value={L1500_bleaching}/>
                <Duo1 key={'Deodorization 1'}/>
                <Duo2 key={'Deodorization 2'}/>
                <G331AHMI key={'G331AHMI'} value={L1500_G331A}/>
                <G331BHMI key={'G331BHMI'} value={L1500_G331B}/>
                <Vacuum key={'Vacuum'}/>
            </HMIWrapper>
        </div>
    )
}

export default L1500Card