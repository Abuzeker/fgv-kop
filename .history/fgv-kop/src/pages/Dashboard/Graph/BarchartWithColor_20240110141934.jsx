import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const paletteSemanticRed = '#f52702';
const brandColor = '#96f77c';

const BarchartWithColor = (props) => {

  console.log(props.data);

  useEffect(() => {
    // console.log(processdata);
    const columnPlot = new Column(props.containername, {
      data: props.data,
      xField: 'date',
      yField: props.type,
      // seriesField: 'color',
      color: ({ color }) => {
        return color
      },
      label: {

        offset: 10,
        position:'middle',
        style: { fill: '#ffffff', fontSize:20 }      
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
