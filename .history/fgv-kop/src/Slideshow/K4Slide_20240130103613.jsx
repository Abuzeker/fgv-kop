import React, { useEffect, useState } from 'react'
import { Card, Carousel, Spin } from 'antd'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'
import StearineHMI from '../HMI/KOPFRA4/StearineHMI'
import ChilledHMI from '../HMI/KOPFRA4/ChilledHMI'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crsyalizer456 from '../HMI/KOPFRA4/Crsyalizer456'
import Crsyalizer789 from '../HMI/KOPFRA4/Crsyalizer789'
import { Request_Realtime_HMI } from '../api'
import { Merge_parameter_name_and_value_line } from '../DataRequest/LogdataProcess'

let FilteredC123, FilteredC456, FilteredC789, FilteredStearine, FilteredChiller

const K4Slide = () => {

    const [state, setState] = useState({ count: 0 });
    const [spinning, setSpinning] = useState(true);

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
      console.log('1');
      const response_C456 = await Request_Realtime_HMI(["CRYSTALLIZER 4","CRYSTALLIZER 5","CRYSTALLIZER 6"], "KOPFRA 4", [])
      console.log('2');

      const response_C789 = await Request_Realtime_HMI(["CRYSTALLIZER 7","CRYSTALLIZER 8","CRYSTALLIZER 9"], "KOPFRA 4", [])
      console.log('3');

      const response_Stearine = await Request_Realtime_HMI(["FT5A","FT5B","FT5C","FT6","FT4"], "KOPFRA 4", [])
      console.log('4');

      const response_CHIILER = await Request_Realtime_HMI(["COOLING TOWER","FT9","FT8"], "KOPFRA 4", [])
      console.log('5');

  
      // console.log(response_C123);
  
      FilteredC123 = Merge_parameter_name_and_value_line(response_C123,["CRYSTALLIZER 1","CRYSTALLIZER 2","CRYSTALLIZER 3"])
      FilteredC456 = Merge_parameter_name_and_value_line(response_C456,["CRYSTALLIZER 4","CRYSTALLIZER 5","CRYSTALLIZER 6"])
      FilteredC789 = Merge_parameter_name_and_value_line(response_C789,["CRYSTALLIZER 7","CRYSTALLIZER 8","CRYSTALLIZER 9"])
  
      FilteredStearine = Merge_parameter_name_and_value_line(response_Stearine,["FT5A","FT5B","FT5C","FT6","FT4"])
      FilteredChiller = Merge_parameter_name_and_value_line(response_CHIILER,["COOLING TOWER","FT9","FT8"])
      setSpinning(false);

      setState(({ count }) => ({ count: count + 1 }));
    }
  

    return (
        <div className='container'>
                        {/* <Spin spinning={spinning} fullscreen /> */}

            <Carousel autoplay autoplaySpeed={10000}>
                <div>
                    <StearineHMI key={'Stearine'} data={FilteredStearine} />
                </div>
                <div>
                    <ChilledHMI key={'Chilled Water'} data={FilteredChiller} />
                </div>
                <div>
                    <Crystalizer134 key={'Crystallizer 123'} data={FilteredC123} />
                </div>
                <div>
                    <Crsyalizer456 key={'Crystallizer 456'} data={FilteredC456} />
                </div>
                <div>
                    <Crsyalizer789 key={'Crystallizer 789'} data={FilteredC789} />
                </div>

            </Carousel>


        </div>
    )
}

export default K4Slide