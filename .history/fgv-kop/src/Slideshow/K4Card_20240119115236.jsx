import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crsyalizer456 from '../HMI/KOPFRA4/Crsyalizer456'
import Crsyalizer789 from '../HMI/KOPFRA4/Crsyalizer789'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value, Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'

let FilteredC123

const K4Card = () => {

  const [state, setState] = useState({ count: 0 });

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
    const response_C123 = await Request_Realtime_HMI(["CRYSTALLIZER 1","CRYSTALLIZER 2","CRYSTALLIZER 3"], "KOPFRA 4", [])
    const response_C456 = await Request_Realtime_HMI(["CRYSTALLIZER 4","CRYSTALLIZER 5","CRYSTALLIZER 6"], "KOPFRA 4", [])
    const response_C789 = await Request_Realtime_HMI(["CRYSTALLIZER 7","CRYSTALLIZER 8","CRYSTALLIZER 9"], "KOPFRA 4", [])

    // console.log(response_C123);

    FilteredC123 = Merge_parameter_name_and_value_line(response_C123,["CRYSTALLIZER 1","CRYSTALLIZER 2","CRYSTALLIZER 3"])
    // console.log(FilteredC123);


    // const response_HMI_CT = await Request_Realtime_HMI(["COOLING TOWER"], "KOPFRA 4", [])
    // const response_HMI_G331A = await Request_Realtime_HMI(["G331A"], "L1000", [])
    // const response_HMI_G331B = await Request_Realtime_HMI(["G331B"], "L1000", [])


    // console.log(response_HMI_DEO);
    // L1000_deo = Merge_parameter_name_and_value(response_HMI_DEO)
    // L1000_bleaching = Merge_parameter_name_and_value(response_HMI_Bleaching)
    // L1000_Filter = Merge_parameter_name_and_value(response_HMI_Filter)
    // L1000_Vacuum = Merge_parameter_name_and_value(response_HMI_Vacuum)
    // L1000_G331A = Merge_parameter_name_and_value(response_HMI_G331A)
    // L1000_G331B = Merge_parameter_name_and_value(response_HMI_G331B)



    setState(({ count }) => ({ count: count + 1 }));
  }




  return (
    <div>
      <HMIWrapper Tab={['Stearine', 'Chilled Water', 'Crystallizer 123', 'Crystallizer 456', 'Crystallizer 789']}>
        <Stearine key={'Stearine'} />
        <Chilled key={'Chilled Water'} />
        {/* <ParameterSetting key={'Setting'}/> */}
        <Crystalizer134 key={'Crystallizer 123'}  data={FilteredC123}/>
        <Crsyalizer456 key={'Crystallizer 456'} />
        <Crsyalizer789 key={'Crystallizer 789'} />

      </HMIWrapper>
    </div>
  )
}

export default K4Card