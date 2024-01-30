import { Card, Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'
import { Request_Realtime, Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value, Merge_parameter_name_and_value_line_obj } from '../DataRequest/LogdataProcess'
import BleachingHMI from '../HMI/L1000/BleachingHMI'
import FiltrationHMI from '../HMI/L1000/FiltrationHMI'
import VacuumHMI from '../HMI/L1000/VacuumHMI'
import G331AHMI from '../HMI/L1000/G331AHMI'
import G331BHMI from '../HMI/L1000/G331BHMI'

let L1000_deo = {}
let L1000_bleaching = {}
let L1000_Filter = {}
let L1000_Vacuum = {}
let L1000_G331A = {}
let L1000_G331B = {}
let request_state = true, request_count = 0


const L1000Slide = () => {
    const [state, setState] = useState({ count: 0 });

    useEffect(() => {

        const interval = setInterval(() => {
            console.log(request_count);
            if (request_state === true) {
                request_realtime()
                request_count = 0
            }
            request_count = request_count + 1

            if (request_count > 3) {
                request_state = true
            }
        }, 30000)

        // console.log('render2');
        return () => {
            clearInterval(interval)
        }
    }, [])

    const request_realtime = async () => {

        request_state = false
        const response_realtime = await Request_Realtime_HMI(["Deodorising", "Bleaching", "Filter", "Vacuum"
            , "G331A", "G331B"], "L1000", [])
        request_state = true

        // console.log(response_realtime);

        // console.log(response_HMI_DEO);
        L1000_deo = Merge_parameter_name_and_value_line_obj(response_realtime, ["Deodorising"])
        L1000_bleaching = Merge_parameter_name_and_value_line_obj(response_realtime, ["Bleaching"])
        L1000_Filter = Merge_parameter_name_and_value_line_obj(response_realtime, ["Filter"])
        L1000_Vacuum = Merge_parameter_name_and_value_line_obj(response_realtime, ["Vacuum"])
        L1000_G331A = Merge_parameter_name_and_value_line_obj(response_realtime, ["G331A"])
        L1000_G331B = Merge_parameter_name_and_value_line_obj(response_realtime, ["G331B"])

        // console.log(L1000_G331A);

        // const timestamp = new Date().toISOString();
        // console.log(timestamp);



        setState(({ count }) => ({ count: count + 1 }));
    }
    return (
        <div className='container'>
            <Carousel autoplay fade autoplaySpeed={10000}>
                <div> <Deodorising key={'Deodorising'} value={L1000_deo} /></div>
                <div> <BleachingHMI key={'Bleaching'} value={L1000_bleaching} /></div>
                <div><FiltrationHMI key={'Filtration'} value={L1000_Filter} /></div>
                <div> <VacuumHMI key={'Vacuum'} value={L1000_Vacuum} /></div>
                <div> <G331AHMI key={'G331A'} value={L1000_G331A} /></div>
                <div> <G331BHMI key={'G331B'} value={L1000_G331B} /></div>
            </Carousel>


        </div>
    )
}

export default L1000Slide