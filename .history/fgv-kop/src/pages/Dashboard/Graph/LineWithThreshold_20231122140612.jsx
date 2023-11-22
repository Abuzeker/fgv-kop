import React, { useEffect } from 'react';
import { Line } from '@antv/g2plot';
import { mocklinethreshol } from '../../../MockData/LineMock';

const data = mocklinethreshol

const LineWithThreshold = ({containername}) => {

    useEffect(() => {

        const line = new Line(containername, {
            data,
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            annotations: [
              // 低于中位数颜色变化
              {
                type: 'regionFilter',
                start: ['min', 'median'],
                end: ['max', '0'],
                color: '#f52702',

              },
              {
                type: 'text',
                position: ['min', 'median'],
                content: '中位数',
                offsetY: -4,
                style: {
                  textBaseline: 'bottom',
                },
              },
              {
                type: 'line',
                start: ['min', 'median'],
                end: ['max', 'median'],
                style: {
                  stroke: '#F4664A',
                  lineDash: [2, 2],
                },
              },
            ],
          });
      
          line.render();
      
        
    
      return () => {
        line.destroy()
      }
    }, [])
    

  return (
    <div id={containername}></div>
  )
}

export default LineWithThreshold
