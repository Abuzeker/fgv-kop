import { Column } from '@antv/g2plot';
// 也可以在项目中直接使用 lodash
import { each, groupBy } from '@antv/util';
import React, { useState, useEffect } from 'react';



const BarStack = (props) => {
  const data = props.data["Today Produced"];
  let max = 10 , valuearray = []

  data.forEach((element) => {
    element.value = parseInt(element.value);
  });

  const annotations = [];
  each(groupBy(data, 'date'), (values, k) => {
    const value = values.reduce((a, b) => a + b.value, 0);
    annotations.push({
      type: 'text',
      position: [k, value],
      content: `${value}`,
      style: { textAlign: 'center', fontSize: 20, fill: 'rgba(255,255,255,1)' },
      offsetY: -10,
    });
    valuearray.push(value)
  }); // <- Added closing parenthesis here
  max =  Math.max(...valuearray)
  max = max * 0.1 + max

  console.log(valuearray);

  useEffect(() => {
    const stackedColumnPlot = new Column(props.containername, {
      data: data,
      isStack: true,
      xField: 'date',
      yField: 'value',
      seriesField: 'parameter',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
      height: 500,
      annotations,
      xAxis: {
        label: {
          style: {
            fill: "#ffffff",
          },
        },
      },
      yAxis: {
        max:max,
        label: {
          style: {
            fill: "#ffffff",
          },
        },
      },
      legend: {
        itemName: {
          style: {
            fill: '#ffffff', 
          },
        },
      },
    });

    stackedColumnPlot.render();

    return () => {
      stackedColumnPlot.destroy();
    };
  }, []);

  return <div id={props.containername}></div>;
};

export default BarStack;
