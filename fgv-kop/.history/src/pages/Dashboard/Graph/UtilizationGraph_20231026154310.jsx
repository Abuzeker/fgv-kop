import React, { useState, useEffect } from 'react';
import { BidirectionalBar } from '@antv/g2plot';

export const data = [
  { country: 'L1500', 'MSM Utilization Rate': 86.4, 'CCNO Utilization Rate': 12.3 },
  { country: 'L1000', 'MSM Utilization Rate': 35.4, 'CCNO Utilization Rate': 18.3 },
  { country: '600TPD', 'MSM Utilization Rate': 3.4, 'CCNO Utilization Rate': 82.3 },
  { country: 'L450', 'MSM Utilization Rate': 63.4, 'CCNO Utilization Rate': 42.3 },
  { country: 'KOPFRA 4', 'MSM Utilization Rate': 43.4, 'CCNO Utilization Rate': 72.3 },
  { country: 'KOPFRA 5', 'MSM Utilization Rate': 53.4, 'CCNO Utilization Rate': 82.3 },

];




const UtilizationGraph = ({ container }) => {

  useEffect(() => {
    const BidirectionalBarPlot = new BidirectionalBar(container, {
      data,
      xField: 'country',
      xAxis: {
        position: 'bottom',
      },
      interactions: [{ type: 'active-region' }],
      yField: ['MSM Utilization Rate', 'CCNO Utilization Rate'],
      tooltip: {
        shared: true,
        showMarkers: false,
      },
    });
    BidirectionalBarPlot.render();


    return () => {
      BidirectionalBarPlot.destroy();
    }
  }, [])


  return (
    <div>
      <div style={{fontSize:'28px', fontWeight:'bold', textAlign:'center' }}>Production Rate</div>
      <div id={container}></div>

    </div>
  )
}

export default UtilizationGraph