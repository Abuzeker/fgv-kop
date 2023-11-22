import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const data = [
  { date: '1/1/2023', value: 0.16, color:'red' },
  { date: '2/1/2023', value: 0.125, color:'red' },
  { date: '3/1/2023', value: 0.24, color:'red' },
  { date: '4/1/2023', value: 0.19, color:'red' },
  { date: '5/1/2023', value: 0.22, color:'red' },
  { date: '6/1/2023', value: 0.05, color:'red' },
  { date: '7/1/2023', value: 0.01, color:'red' },
  { date: '8/1/2023', value: 0.015, color:'red' },
];

const BarchartWithColor = ({ containername }) => {


  useEffect(() => {

    const paletteSemanticRed = '#f52702';
    const brandColor = '#96f77c';
    const columnPlot = new Column(containername, {
      data,
      xField: 'date',
      yField: 'value',
      seriesField: '',
      color: ({ value }) => {
        console.log(value);
        if (value < 0.15 ) {
          return paletteSemanticRed;
        }
        return brandColor;
      },
      label: {
        content: (originData) => {
          const val = parseFloat(originData.value);
          return (val * 100).toFixed(1) + '%';
        },
        offset: 10,
      },
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
