import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';

const Barchart = (props) => {
  let Bardata = [];

  function reverseArray(arr) {
    return arr.slice().reverse();
  }

  useEffect(() => {
    const data = [];
    try {
      props.data.forEach((element) => {
        let obj = {};

        obj['date'] = element.date;
        obj['value'] = parseFloat(element['Today (CPO)']);
        obj['type'] = 'CPO';
        data.push(obj);

        obj = {};
        obj['date'] = element.date;
        obj['value'] = parseFloat(element['Today (CPKO)']);
        obj['type'] = 'CPKO';
        data.push(obj);
      });
      Bardata = data.slice().reverse();
    } catch (error) {}

    const columnPlot = new Column(props.containername, {
      data: Bardata,
      xField: 'date',
      yField: 'value',
      seriesField: 'type',
      autoFit: true,
      isGroup: true,
      label: {
        position: 'bottom',
        style: {
          fill: '#FFFFFF',
          opacity: 0,
          style: { fill: '#ffffff' },
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
          style: { fill: '#ffffff' },
        },
      },
      yAxis: {
        label: {
          style: { fill: '#ffffff' },
        },
      },
      meta: {
        Date: {
          alias: 'Date',
        },
        Unit: {
          alias: 'MT',
        },
      },
      legend: {
        position: 'top',
        itemName: {
          style: {
            fill: '#ffffff',
          },
        },
      },
      theme: {
        colors10: ['#302ad4', '#7bed7b', '#e85151'],
      },
      style: (item) => {
        // Set the color based on the condition (value greater than 1)
        return {
          fill: item.value > 1 ? '#ff0000' : '#302ad4', // Red if greater than 1, else use the default color
        };
      },
      height: 400,
    });

    columnPlot.render();

    return () => {
      columnPlot.destroy();
    };
  }, [props.data]);

  return <div id={props.containername}></div>;
};

export default Barchart;
