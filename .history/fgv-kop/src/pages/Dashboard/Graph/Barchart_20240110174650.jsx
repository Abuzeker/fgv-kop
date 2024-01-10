import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@antv/g2plot';


const Barchart = (props) => {

  let Bardata = []

  function reverseArray(arr) {
    return arr.slice().reverse();
  }

  useEffect(() => {
    const data = []
    try {
      props.data.forEach(element => {
        let obj = {}

        if (props.por === 'Refine') {
          obj['date'] = element.date
          obj['value'] = parseFloat(element['Today (CPO)'])
          obj['type'] = 'CPO'
          data.push(obj)

          obj = {}
          obj['date'] = element.date
          obj['value'] = parseFloat(element['Today (CPKO)'])
          obj['type'] = 'CPKO'
          data.push(obj)
        }

        if (props.por === 'Fract') {
          obj = {}
          obj['date'] = element.date
          obj['value'] = parseFloat(element['Today (RBD PO)'])
          obj['type'] = 'RBD PO'
          data.push(obj)
        }
      });

      console.log(Bardata);
      Bardata = data.slice().reverse();
      
    } catch (error) {

    }


    const columnPlot = new Column(props.containername, {
      data: Bardata,
      xField: 'date',
      yField: 'value',
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
      theme: {
        colors10: ['#302ad4', '#7bed7b', '#e85151', /* Add more colors as needed */],
      },
      height: 400
    });
    columnPlot.render();


    return () => { columnPlot.destroy(); }
  }, [props.data])

  return (
    <div id={props.containername}></div>
  )
}
export default Barchart

