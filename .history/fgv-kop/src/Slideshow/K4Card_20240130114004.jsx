import React, { useEffect, useState } from 'react'
import HMIWrapper from './HMIWrapper'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crsyalizer456 from '../HMI/KOPFRA4/Crsyalizer456'
import Crsyalizer789 from '../HMI/KOPFRA4/Crsyalizer789'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value, Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'
import StearineHMI from '../HMI/KOPFRA4/StearineHMI'
import ChilledHMI from '../HMI/KOPFRA4/ChilledHMI'
import { Spin } from 'antd'

let FilteredC123, FilteredC456, FilteredC789, FilteredStearine, FilteredChiller
let request_state = true, request_count = 0

const K4Card = () => {

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

    }, 5000)


    // console.log('render2');
    return () => {
      clearInterval(interval)
    }
  }, [])

  // useEffect(() => {
  //   console.log('offspin');

  //   // Cleanup function
  //   return () => {
  //     // Set spinning to true when the component is unmounted
  //     setSpinning(false);
  //   };
  // }, []); // Empty dependency array to run the effect only once


  const request_realtime = async () => {

    // console.log('rendering');

    // const response_C123 = await Request_Realtime_HMI(["CRYSTALLIZER 1","CRYSTALLIZER 2","CRYSTALLIZER 3"], "KOPFRA 4", [])
    // const response_C456 = await Request_Realtime_HMI(["CRYSTALLIZER 4","CRYSTALLIZER 5","CRYSTALLIZER 6"], "KOPFRA 4", [])
    // const response_C789 = await Request_Realtime_HMI(["CRYSTALLIZER 7","CRYSTALLIZER 8","CRYSTALLIZER 9"], "KOPFRA 4", [])

    // const response_Stearine = await Request_Realtime_HMI(["FT5A","FT5B","FT5C","FT6","FT4"], "KOPFRA 4", [])
    // const response_CHIILER = await Request_Realtime_HMI(["COOLING TOWER","FT9","FT8"], "KOPFRA 4", [])
    request_state = false

    const response_realtime = await Request_Realtime_HMI(["CRYSTALLIZER 1", "CRYSTALLIZER 2", "CRYSTALLIZER 3",
      "CRYSTALLIZER 4", "CRYSTALLIZER 5", "CRYSTALLIZER 6",
      "CRYSTALLIZER 7", "CRYSTALLIZER 8", "CRYSTALLIZER 9",
      "FT5A", "FT5B", "FT5C", "FT6", "FT4",
      "COOLING TOWER", "FT9", "FT8",
      "COOLING TOWER", "FT9", "FT8"], "KOPFRA 4", [])
      console.log(response_realtime);

    request_state = true

    // console.log(response_realtime);

    FilteredC123 = Merge_parameter_name_and_value_line(response_realtime, ["CRYSTALLIZER 1", "CRYSTALLIZER 2", "CRYSTALLIZER 3"])
    FilteredC456 = Merge_parameter_name_and_value_line(response_realtime, ["CRYSTALLIZER 4", "CRYSTALLIZER 5", "CRYSTALLIZER 6"])
    FilteredC789 = Merge_parameter_name_and_value_line(response_realtime, ["CRYSTALLIZER 7", "CRYSTALLIZER 8", "CRYSTALLIZER 9"])

    FilteredStearine = Merge_parameter_name_and_value_line(response_realtime, ["FT5A", "FT5B", "FT5C", "FT6", "FT4"])
    FilteredChiller = Merge_parameter_name_and_value_line(response_realtime, ["COOLING TOWER", "FT9", "FT8"])

    // console.log(FilteredC123);
    // console.log(FilteredC456);
    // console.log(FilteredStearine);


    // console.log('kofra4 request');
    // setSpinning(false);

    setState(({ count }) => ({ count: count + 1 }));
  }




  return (
    <div>
      {/* <Spin spinning={spinning} fullscreen /> */}

      <HMIWrapper Tab={['Stearine', 'Chilled Water', 'Crystallizer 123', 'Crystallizer 456', 'Crystallizer 789']}>
        <StearineHMI key={'Stearine'} data={FilteredStearine} />
        <ChilledHMI key={'Chilled Water'} data={FilteredChiller} />
        {/* <ParameterSetting key={'Setting'}/> */}
        <Crystalizer134 key={'Crystallizer 123'} data={FilteredC123} />
        <Crsyalizer456 key={'Crystallizer 456'} data={FilteredC456} />
        <Crsyalizer789 key={'Crystallizer 789'} data={FilteredC789} />

      </HMIWrapper>

    </div>
  )
}

export default K4Card