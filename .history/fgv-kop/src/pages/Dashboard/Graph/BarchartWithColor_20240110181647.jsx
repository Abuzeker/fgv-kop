import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const paletteSemanticRed = '#f52702';
const brandColor = '#03ff18';
const Yellow = '#FFFF00'

const BarchartWithColor = (props) => {
  const valuetype = props.type
  // console.log(valuetype);

  useEffect(() => {
    const { data, type, containername } = props;

    // const componentData = []

    const componentData = data.map(obj => {
      const value = obj[props.type];
      let color;
    
      if (value < props.range[0]) {
        color = brandColor;
      } else if (value > props.range[1]) {
        color = paletteSemanticRed;
      } else {
        color = Yellow;
      }
    
      return {
        date: obj.date,
        value,
        color,
      };
    });

    // console.log(componentData);
    const columnPlot = new Column(props.containername, {
      data: componentData,
      xField: 'date',
      yField: 'value',
      seriesField: 'color',
      color: ({ color }) => {
        if (color === paletteSemanticRed) {
          return paletteSemanticRed;
        }
        if (color === brandColor) {
          return brandColor;
        }
        if (color === Yellow) {
          return Yellow;
        }
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
      height: props.height
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
