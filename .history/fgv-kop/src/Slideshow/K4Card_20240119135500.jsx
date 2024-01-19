import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crsyalizer456 from '../HMI/KOPFRA4/Crsyalizer456'
import Crsyalizer789 from '../HMI/KOPFRA4/Crsyalizer789'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value, Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'
import StearineHMI from '../HMI/KOPFRA4/StearineHMI'
import ChilledHMI from '../HMI/KOPFRA4/ChilledHMI'

let FilteredC123, FilteredC456, FilteredC789, FilteredStearine, FilteredChiller

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

    const response_Stearine = await Request_Realtime_HMI(["FT5A","FT5B","FT5C","FT6","FT4"], "KOPFRA 4", [])
    const response_CHIILER = await Request_Realtime_HMI(["COOLING TOWER","FT9","FT8"], "KOPFRA 4", [])


    // console.log(response_C123);

    FilteredC123 = Merge_parameter_name_and_value_line(response_C123,["CRYSTALLIZER 1","CRYSTALLIZER 2","CRYSTALLIZER 3"])
    FilteredC456 = Merge_parameter_name_and_value_line(response_C456,["CRYSTALLIZER 4","CRYSTALLIZER 5","CRYSTALLIZER 6"])
    FilteredC789 = Merge_parameter_name_and_value_line(response_C789,["CRYSTALLIZER 7","CRYSTALLIZER 8","CRYSTALLIZER 9"])

    FilteredStearine = Merge_parameter_name_and_value_line(response_Stearine,["FT5A","FT5B","FT5C","FT6","FT4"])
    FilteredChiller = Merge_parameter_name_and_value_line(response_CHIILER,["COOLING TOWER","FT9","FT8"])


    // console.log(FilteredStearine);


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
        <StearineHMI key={'Stearine'} data={FilteredStearine}/>
        <ChilledHMI key={'Chilled Water'} data={FilteredChiller}/>
        {/* <ParameterSetting key={'Setting'}/> */}
        <Crystalizer134 key={'Crystallizer 123'}  data={FilteredC123}/>
        <Crsyalizer456 key={'Crystallizer 456'} data={FilteredC456}/>
        <Crsyalizer789 key={'Crystallizer 789'} data={FilteredC789}/>

      </HMIWrapper>
    </div>
  )
}

export default K4Card