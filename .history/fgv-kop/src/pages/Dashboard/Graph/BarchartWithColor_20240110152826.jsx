import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const paletteSemanticRed = '#f52702';
const brandColor = '#96f77c';
const Yellow = '#dde80e'

const BarchartWithColor = (props) => {
  const valuetype = props.type
  console.log(valuetype);

  useEffect(() => {
    const { data, type, containername } = props;

    // const componentData = []

    const componentData = data.map(obj => {
      const value = obj[props.type];
      let color;
    
      if (value < props.range[0]) {
        color = 'green';
      } else if (value > props.range[1]) {
        color = 'red';
      } else {
        color = 'yellow';
      }
    
      return {
        date: obj.date,
        value,
        color,
      };
    });

    console.log(componentData);
    const columnPlot = new Column(props.containername, {
      data: componentData,
      xField: 'date',
      yField: 'value',
      seriesField: 'color',
      color: ({ color }) => {
        if (color === paletteSemanticRed) {
          return paletteSemanticRed;
        }
        return brandColor;
      },
      label: {
        offset: 10,
        position: 'middle',
        style: { fill: '#2b2727', fontSize: 20, fontWeight:'bold' }
      },
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
      height: 300
    });

    columnPlot.render();


    return () => { columnPlot.destroy(); }
  }, [props.data])

  return (
    <div>
      <span style={{ fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
        {props.type}
      </span>
      <div style={{ marginBottom: '60px' }} ></div>
      <div id={props.containername}></div>
    </div>

  )
}
export default BarchartWithColor
