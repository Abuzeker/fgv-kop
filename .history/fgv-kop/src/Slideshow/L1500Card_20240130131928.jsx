import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import IceCondes from '../pages/L1500/IceCondes'
import Duo2 from '../pages/L1500/Duo2'
import Vacuum from '../pages/L1500/Vacuum'
import BleachingHMI from '../HMI/L1500/Bleaching_HMI'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value, Merge_parameter_name_and_value_line_obj } from '../DataRequest/LogdataProcess'
import G331AHMI from '../HMI/L1000/G331AHMI'
import G331BHMI from '../HMI/L1000/G331BHMI'
import Doe1HMI from '../HMI/L1500/Doe1HMI'
import Deo2HMI from '../HMI/L1500/Deo2HMI'
import VacuumHMI from '../HMI/L1500/VacuumHMI'
import IceCondesHMI from '../HMI/L1500/IceCondesHMI'


let L1500_deo = {}
let L1500_bleaching = {}
let L1500_Vacuum = {}
let L1500_G331A = {}
let L1500_G331B = {}
let L1500_IceD_Condeser ={}
let request_state = true, request_count = 0


const L1500Card = () => {


    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            if (request_state === true) {
                request_realtime()
                request_count = 0
            }
            request_count = request_count + 1

            if (request_count > 3) {
                request_state = true
            }
        }, 5000)


        // console.log('render2');
        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {
        // const response_HMI_DEO = await Request_Realtime_HMI(["Deodorising"], "L1500", [])
        // const response_HMI_Bleaching = await Request_Realtime_HMI(["Bleaching"], "L1500", [])
        // // const response_HMI_Filter = await Request_Realtime_HMI(["Filter"], "L1500", [])
        // const response_HMI_Vacuum = await Request_Realtime_HMI(["Vacuum"], "L1500", [])
        // const response_HMI_G331A = await Request_Realtime_HMI(["G331A"], "L1500", [])
        // const response_HMI_G331B = await Request_Realtime_HMI(["G331B"], "L1500", [])
        request_state = false
        console.log('Request');
        const response_realtime = await Request_Realtime_HMI(["Deodorising", "Bleaching", "Vacuum", "Ice Condenser",
             "G331A", "G331B"], "L1500", [])
            
        request_state = true

        // console.log(response_HMI_Bleaching);
        L1500_deo = Merge_parameter_name_and_value_line_obj(response_realtime, ["Deodorising"])
        L1500_bleaching = Merge_parameter_name_and_value_line_obj(response_realtime, ["Bleaching"])
        L1500_Vacuum = Merge_parameter_name_and_value_line_obj(response_realtime, ["Vacuum"])
        L1500_G331A = Merge_parameter_name_and_value_line_obj(response_realtime, ["G331A"])
        L1500_G331B = Merge_parameter_name_and_value_line_obj(response_realtime, ["G331B"])
        L1500_IceD_Condeser = Merge_parameter_name_and_value_line_obj(response_realtime, ["Ice Condenser"])

        console.log(L1500_IceD_Condeser);



        setState(({ count }) => ({ count: count + 1 }));
    }


    return (
        <div>
            <HMIWrapper Tab={['Deodorization 1', 'Deodorization 2', 'Ice Codensation', 'Bleaching', 'G331AHMI', 'G331BHMI']}>
                <IceCondesHMI key={'Ice Codensation'} value={L1500_IceD_Condeser}/>
                <BleachingHMI key={'Bleaching'} value={L1500_bleaching} />
                <Doe1HMI key={'Deodorization 1'} value={L1500_deo} />
                <Deo2HMI key={'Deodorization 2'} value={L1500_deo} />
                <G331AHMI key={'G331AHMI'} value={L1500_G331A} />
                <G331BHMI key={'G331BHMI'} value={L1500_G331B} />
                <VacuumHMI key={'Vacuum'} value={L1500_Vacuum} />
            </HMIWrapper>
        </div>
    )
}

export default L1500Card