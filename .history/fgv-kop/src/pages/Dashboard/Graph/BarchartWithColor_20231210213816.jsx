import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

// const data = [
//   { date: '1/1/2023', value: 1685 },
//   { date: '2/1/2023', value: 1251 },
//   { date: '3/1/2023', value: 241 },
//   { date: '4/1/2023', value: 1964 },
//   { date: '5/1/2023', value: 2251 },
//   { date: '6/1/2023', value: 5756 },
//   { date: '7/1/2023', value: 1174 },
//   { date: '8/1/2023', value: 1563 },
// ];

const paletteSemanticRed = '#f52702';
const brandColor = '#96f77c';

// const preprocessData = (data) => {
//   return data.map(item => ({
//     ...item,
//     color: item.value > 1500 ? brandColor :paletteSemanticRed,
//   }));
// };

const BarchartWithColor = ( props ) => {

  console.log(props.data);

  let data  = props.data['Daily Quantity']

  const preprocessData = (data) => {
    return data.map(item => ({
      ...item,
      color: item["Today Quantity"] > item["Today Targeted Quantity"] ? brandColor :paletteSemanticRed,
    }));
  };
  


  // console.log(data);


  useEffect(() => {

    const processdata = []
    // console.log(processdata);
    const columnPlot = new Column(props.containername, {
      data: processdata,
      xField: 'date',
      yField: 'Today Quantity',
      seriesField: 'color',
      color: ({ color }) => {
        return color
      },
      label: {
        content: (originData) => {
          const val = parseFloat(originData["Today Quantity"]);
          return  val;
        },
        offset: 10,
        position:'top',
        style: { fill: '#ffffff' }      
      },
      legend: false,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
          style: { fill: '#ffffff' }      
        },
      },
      yAxis:{
        label:{
          style: { fill: '#ffffff' }      
        }
      },
      height: 500
    });

    columnPlot.render();


    return () => { columnPlot.destroy(); }
  }, [])

  return (
    <div id={props.containername}></div>
  )
}
export default BarchartWithColor
