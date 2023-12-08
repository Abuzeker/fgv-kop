import { Column } from '@antv/g2plot';
import React, { useEffect } from 'react'


const data = [
    {
      "year": "1991",
      "value": 3,
      "type": "Lon"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Lon"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Lon"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Lon"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Lon"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Lon"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Lon"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Lon"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Lon"
    },
    {
      "year": "1991",
      "value": 3,
      "type": "Bor"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Bor"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Bor"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Bor"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Bor"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Bor"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Bor"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Bor"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Bor"
    }
  ]

const BarStack = () => {
    useEffect(() => {
        const stackedColumnPlot = new Column('containerdsd', {
            data,
            isStack: true,
            xField: 'year',
            yField: 'value',
            seriesField: 'type',
            label: {
                // 可手动配置 label 数据标签位置
                position: 'middle', // 'top', 'bottom', 'middle'
            },
            interactions: [{ type: 'active-region', enable: false }],
            columnBackground: {
                style: {
                    fill: 'rgba(0,0,0,0.1)',
                },
            },
        });

        stackedColumnPlot.render();

        return () => {
            stackedColumnPlot.destroy()
        }
    }, [])

    return (
        <div id='containerdsd'>Bar</div>
    )
}

export default BarStack