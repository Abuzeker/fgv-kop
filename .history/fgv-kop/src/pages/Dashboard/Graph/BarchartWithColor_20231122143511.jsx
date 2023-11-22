import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const data = [
  { date: '1/1/2023', value: 0.16, color:'#f52702' },
  { date: '2/1/2023', value: 0.125, color:'#f52702' },
  { date: '3/1/2023', value: 0.24, color:'#f52702' },
  { date: '4/1/2023', value: 0.19, color:'#f52702' },
  { date: '5/1/2023', value: 0.22, color:'#f52702' },
  { date: '6/1/2023', value: 0.05, color:'#f52702' },
  { date: '7/1/2023', value: 0.01, color:'#f52702' },
  { date: '8/1/2023', value: 0.015, color:'#f52702' },
];

const BarchartWithColor = ({ containername }) => {


  useEffect(() => {

    const paletteSemanticRed = '#f52702';
    const brandColor = '#96f77c';
    const columnPlot = new Column(containername, {
      data,
      xField: 'date',
      yField: 'value',
      seriesField: 'color',
      color: 'color',
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
