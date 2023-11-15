import React, { useState, useEffect } from 'react';
import { Column } from '@antv/g2plot';
import { mockmultibar } from '../../../MockData/LineMock';

const data = mockmultibar

const MultiBar = ({containername}) => {

    useEffect(() => {

        const column = new Column(containername, {
            data,
            xField: 'date',
            yField: 'efficiency',
            seriesField: 'order',
            isGroup: 'true',
            columnStyle: {
              radius: [20, 20, 0, 0],
            },
          });
      
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
