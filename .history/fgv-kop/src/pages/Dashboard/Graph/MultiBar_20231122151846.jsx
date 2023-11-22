import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';
import { mockmultibar } from '../../../MockData/LineMock';

const data = mockmultibar

const MultiBar = ({ containername }) => {

  useEffect(() => {

    const column = new Column(containername, {
      data,
      xField: 'date',
      yField: 'efficiency',
      seriesField: 'order',
      isGroup: 'true',
      columnStyle: {
        radius: [5, 5, 0, 0],
      },
      label: {
        // 可手动配置 label 数据标签位置
        position: 'top',
        style: { fill: '#aa' }
      },

      xAxis: {
        label: {
          autoHide: true,
          style: { fill: '#ffffff' }
        },
      },
      yAxis: {
        label: {
          style: { fill: '#ffffff' }
        }
      },
    })
    column.render();


    return () => {
      column.destroy()
    }
  }, [])


  return (
    <div id={containername}></div>
  )
}

export default MultiBar
