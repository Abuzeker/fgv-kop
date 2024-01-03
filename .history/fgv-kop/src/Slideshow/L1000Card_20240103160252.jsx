import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'
import { Request_Realtime, Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value } from '../DataRequest/LogdataProcess'
import BleachingHMI from '../HMI/L1000/BleachingHMI'
import FiltrationHMI from '../HMI/L1000/FiltrationHMI'
import VacuumHMI from '../HMI/L1000/VacuumHMI'
import G331AHMI from '../HMI/L1000/G331AHMI'
import G331BHMI from '../HMI/L1000/G331BHMI'
import { Card } from 'antd'


let L1000_deo = {}
let L1000_bleaching = {}
let L1000_Filter = {}
let L1000_Vacuum = {}
let L1000_G331A = {}
let L1000_G331B = {}
const tabs = ['Deodorising', 'Bleaching', 'Filtration', 'Vacuum', 'G331A', 'G331B'];

const L1000Card = () => {

    const [state, setState] = useState({ count: 0 });
    

    const [tabkey, settabkey] = useState(tabs[0].key)

    const onTabChange = (key) => {
        console.log(key);
        settabkey(key)
    }

    useEffect(() => {

        const interval = setInterval(() => {
            request_realtime()
        }, 5000)

        const interval_CHANGING = setInterval(() => {

        }, 15000)

        // console.log('render2');
        return () => {
            clearInterval(interval)
            clearInterval(interval_CHANGING)
        }
    }, [])

    const request_realtime = async () => {
        const response_HMI_DEO = await Request_Realtime_HMI(["Deodorising"], "L1000", [])
        const response_HMI_Bleaching = await Request_Realtime_HMI(["Bleaching"], "L1000", [])
        const response_HMI_Filter = await Request_Realtime_HMI(["Filter"], "L1000", [])
        const response_HMI_Vacuum = await Request_Realtime_HMI(["Vacuum"], "L1000", [])
        const response_HMI_G331A = await Request_Realtime_HMI(["G331A"], "L1000", [])
        const response_HMI_G331B = await Request_Realtime_HMI(["G331B"], "L1000", [])


        // console.log(response_HMI_DEO);
        L1000_deo = Merge_parameter_name_and_value(response_HMI_DEO)
        L1000_bleaching = Merge_parameter_name_and_value(response_HMI_Bleaching)
        L1000_Filter = Merge_parameter_name_and_value(response_HMI_Filter)
        L1000_Vacuum = Merge_parameter_name_and_value(response_HMI_Vacuum)
        L1000_G331A = Merge_parameter_name_and_value(response_HMI_G331A)
        L1000_G331B = Merge_parameter_name_and_value(response_HMI_G331B)



        setState(({ count }) => ({ count: count + 1 }));
    }

    return (
        <div>
            <Card bordered={false}
                style={{ borderRadius: 0, width: '100%', height: '100%' }} hoverable={false}
                tabList={tabs}
                bodyStyle={{ padding: "0px", height: '100%' }}
                headStyle={{ backgroundColor: '#c7bcbb', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                activeTabKey={tabkey}
                onTabChange={key => {
                    onTabChange(key);
                }}
            >
                <Deodorising key={'Deodorising'} value={L1000_deo} />
                <BleachingHMI key={'Bleaching'} value={L1000_bleaching} />
                <FiltrationHMI key={'Filtration'} value={L1000_Filter} />
                <VacuumHMI key={'Vacuum'} value={L1000_Vacuum} />
                <G331AHMI key={'G331A'} value={L1000_G331A} />
                <G331BHMI key={'G331B'} value={L1000_G331B} />            </Card>
            {/* <HMIWrapper Tab={tabs} key={tabs[3]}>
                <Deodorising key={'Deodorising'} value={L1000_deo} />
                <BleachingHMI key={'Bleaching'} value={L1000_bleaching} />
                <FiltrationHMI key={'Filtration'} value={L1000_Filter} />
                <VacuumHMI key={'Vacuum'} value={L1000_Vacuum} />
                <G331AHMI key={'G331A'} value={L1000_G331A} />
                <G331BHMI key={'G331B'} value={L1000_G331B} />
            </HMIWrapper> */}
        </div>
    )
}

export default L1000Card