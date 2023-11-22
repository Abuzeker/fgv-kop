import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const data = [
  { date: '1/1/2023', value: 1685 },
  { date: '2/1/2023', value: 1251 },
  { date: '3/1/2023', value: 241 },
  { date: '4/1/2023', value: 1964 },
  { date: '5/1/2023', value: 2251 },
  { date: '6/1/2023', value: 5756 },
  { date: '7/1/2023', value: 1174 },
  { date: '8/1/2023', value: 1563 },
];

const paletteSemanticRed = '#f52702';
const brandColor = '#96f77c';

const preprocessData = (data) => {
  return data.map(item => ({
    ...item,
    color: item.value > 1500 ? brandColor :paletteSemanticRed,
  }));
};

const BarchartWithColor = ({ containername }) => {


  useEffect(() => {

    const processdata = preprocessData(data)
    const columnPlot = new Column(containername, {
      data: processdata,
      xField: 'date',
      yField: 'value',
      seriesField: 'color',
      color: ({ color }) => {
        return color
      },
      label: {
        content: (originData) => {
          const val = parseFloat(originData.value);
          return  val;
        },
        offset: 10,
        position:'top',
        style: { fill: '#ffffff' }      },
      legend: false,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      height: 500
    });

    columnPlot.render();


    return () => { columnPlot.destroy(); }
  }, [])

  return (
    <div id={containername}></div>
  )
}
export default BarchartWithColor
