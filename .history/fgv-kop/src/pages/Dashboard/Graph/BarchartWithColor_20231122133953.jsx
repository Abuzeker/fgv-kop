import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const data = [
  { date: '1/1/2023', value: 0.16 },
  { date: '2/1/2023', value: 0.125 },
  { date: '3/1/2023', value: 0.24 },
  { date: '4/1/2023', value: 0.19 },
  { date: '5/1/2023', value: 0.22 },
  { date: '6/1/2023', value: 0.05 },
  { date: '7/1/2023', value: 0.01 },
  { date: '8/1/2023', value: 0.015 },
];

const BarchartWithColor = ({containername}) => {


    useEffect(() => {
  
      const paletteSemanticRed = '#f52702';
      const brandColor = '#96f77c';
        const columnPlot = new Column(containername, {
          data,
          xField: 'date',
          yField: 'value',
          seriesField: '',
          color: ({ date }) => {
            if (date === '7/1/2023' || date === '8/1/2023') {
              return paletteSemanticRed;
            }
            return brandColor;
          },
          label: {
            content: (originData) => {
              const val = parseFloat(originData.value);
              if (val < 0.05) {
                return (val * 100).toFixed(1) + '%';
              }
              else{}
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
      
  
      return () => {columnPlot.destroy(); }
    }, [])
  
    return (
      <div id={containername}></div>
    )
  }
  export default BarchartWithColor
  