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

const BarchartWithColor = (props) => {

  console.log(props.data);

  const extractData = (inputArray, keyword) => {
    const result = [];

    inputArray.forEach(item => {
      const date = item.date;
      const newData = { date };

      Object.keys(item).forEach(key => {
        if (key.includes(keyword)) {
          newData[key] = item[key];
        }
      });

      result.push(newData);
    });

    return result;
  };


  let data = props.data['Daily Quantity']

  const preprocessData = (data) => {
    return data.map(item => ({
      ...item,
      color: item["Today Quantity"] > item["Today Targeted Quantity"] ? brandColor : paletteSemanticRed,
    }));
  };



  // console.log(data);


  useEffect(() => {

    const extractedDataCPO = extractData(props.data, 'CPO');
    const extractedDataCPKO = extractData(props.data, 'CPKO');
    const extractedDataRBDPO = extractData(props.data, 'RDB PO');

    console.log(extractedDataCPO);

    const processdata = []
    // console.log(processdata);
    const columnPlot = new Column(props.containername, {
      data: extractedDataCPO,
      xField: 'date',
      yField: 'Bleaching Earth Usage (CPO)',
      // seriesField: 'color',
      color: ({ color }) => {
        return color
      },
      // label: {
      //   content: (originData) => {
      //     const val = parseFloat(originData["Today Quantity"]);
      //     return  val;
      //   },
      //   offset: 10,
      //   position:'top',
      //   style: { fill: '#ffffff' }      
      // },
      legend: false,
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
