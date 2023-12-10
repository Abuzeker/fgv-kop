import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@antv/g2plot';


const data2 = [
  {
    Date: '10/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 38000,
  },
  {
    Date: '10/10/2023',
    type: 'PHOSPHORIC',
    Unit: 86000,
  },
  {
    Date: '10/10/2023',
    type: 'LNG',
    Unit: 68000,
  },
  {
    Date: '10/10/2023',
    type: 'ELEKTRIK',
    Unit: 50000,
  },
  {
    Date: '10/10/2023',
    type: 'WATER',
    Unit: 23000,
  },
  {
    Date: '10/10/2023',
    type: 'PAC',
    Unit: 7000,
  },

  {
    Date: '11/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 75566,
  },
  {
    Date: '11/10/2023',
    type: 'PHOSPHORIC',
    Unit: 78524,
  },
  {
    Date: '11/10/2023',
    type: 'LNG',
    Unit: 56754,
  },
  {
    Date: '11/10/2023',
    type: 'ELEKTRIK',
    Unit: 23145,
  },
  {
    Date: '11/10/2023',
    type: 'WATER',
    Unit: 13578,
  },
  {
    Date: '11/10/2023',
    type: 'PAC',
    Unit: 45566,
  },

  {
    Date: '12/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '12/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '12/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '12/10/2023',
    type: 'ELEKTRIK',
    Unit: 9755,
  },
  {
    Date: '12/10/2023',
    type: 'WATER',
    Unit: 8412,
  },
  {
    Date: '12/10/2023',
    type: 'PAC',
    Unit: 32457,
  },

  {
    Date: '13/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '13/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '13/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '13/10/2023',
    type: 'ELEKTRIK',
    Unit: 97255,
  },
  {
    Date: '13/10/2023',
    type: 'WATER',
    Unit: 84312,
  },
  {
    Date: '13/10/2023',
    type: 'PAC',
    Unit: 32457,
  },

  {
    Date: '14/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '14/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '14/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '14/10/2023',
    type: 'ELEKTRIK',
    Unit: 9755,
  },
  {
    Date: '14/10/2023',
    type: 'WATER',
    Unit: 8412,
  },
  {
    Date: '14/10/2023',
    type: 'PAC',
    Unit: 32457,
  },

  {
    Date: '15/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '15/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '15/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '15/10/2023',
    type: 'ELEKTRIK',
    Unit: 9755,
  },
  {
    Date: '15/10/2023',
    type: 'WATER',
    Unit: 8412,
  },
  {
    Date: '15/10/2023',
    type: 'PAC',
    Unit: 32457,
  },

  {
    Date: '16/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 38000,
  },
  {
    Date: '16/10/2023',
    type: 'PHOSPHORIC',
    Unit: 86000,
  },
  {
    Date: '16/10/2023',
    type: 'LNG',
    Unit: 68000,
  },
  {
    Date: '16/10/2023',
    type: 'ELEKTRIK',
    Unit: 50000,
  },
  {
    Date: '16/10/2023',
    type: 'WATER',
    Unit: 23000,
  },
  {
    Date: '16/10/2023',
    type: 'PAC',
    Unit: 7000,
  },

];




const Barchart = (props) => {

  console.log(props.data);
  useEffect(() => {
    const data = []
    props.data.forEach(element => {
      let obj = {}

      obj['date'] = element.date
      obj['value'] = parseFloat(element['Today (CPO)']).toFixed(1)
      obj['type'] = 'CPO'
      data.push(obj)

      obj = {}
      obj['date'] = element.date
      obj['value'] = parseFloat(element['Today (CPKO)']).toFixed(1)
      obj['type'] = 'CPKO'
      data.push(obj)

      obj = {}
      obj['date'] = element.date
      obj['value'] = parseFloat(element['Today (RBD PO)']).toFixed(1)
      obj['type'] = 'CPO'
      data.push(obj)
    });
    console.log(data);

    const columnPlot = new Column('gfdf', {
      data:data2,
      xField: 'Date',
      yField: 'unit',
      seriesField: 'type',
      // height: 100,
      autoFit: true,

      // isStack: true,
      isGroup: true,
      // height: 400, // Set the height of the chart

      label: {
        position: 'bottom', // 'top', 'bottom', 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0,
          style: { fill: '#ffffff' }
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
          style: { fill: '#ffffff' }
        },
      },
      yAxis: {
        label: {
          style: { fill: '#ffffff' }
        }

      },
      meta: {
        Date: {
          alias: 'Date',
        },
        Unit: {
          alias: 'MT',
        },
      },
      legend: { // Configure the legend
        position: 'top', // 'top', 'bottom', 'left', 'right'
        itemName: {
          style: {
            fill: '#ffffff',
          },
        },
      },
      height: 700
    });
    columnPlot.render();


    return () => { columnPlot.destroy(); }
  }, [])

  return (
    <div id='gfdf'></div>
  )
}
export default Barchart

