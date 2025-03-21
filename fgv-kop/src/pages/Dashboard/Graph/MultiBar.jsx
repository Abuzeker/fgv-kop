import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';
// import { mockmultibar } from '../../../MockData/LineMock';

// const data = mockmultibar

const MultiBar = ({ containername, Oridata }) => {

  // console.log(Oridata);

  useEffect(() => {

    // console.log('sdsd');
    // console.log(Oridata);

    function filterByEfficiency(data) {
      return data.filter(item => item.Efficiency !== 0);
  }

  const filteredData = filterByEfficiency(Oridata);
  // console.log(filteredData);

    const column = new Column(containername, {
      data : filteredData,
      xField: 'date',
      yField: 'Efficiency',
      seriesField: 'Asset',
      isGroup: 'true',
      columnStyle: {
        radius: [5, 5, 0, 0],
      },
      label: {
        // 可手动配置 label 数据标签位置
        position: 'top',
        style: { fill: '#ffffff' }
      },
      legend: {
        itemName: {
          style: {
            fill: '#ffffff', 
          },
        },
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
        },
        max:150
      },
    })
    column.render();

    return () => {
      column.destroy()
    }
  }, [Oridata])


  return (
    <div id={containername}></div>
  )
}

export default MultiBar
