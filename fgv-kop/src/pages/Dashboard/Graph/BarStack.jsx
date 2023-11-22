import { Column } from '@antv/g2plot';
import React, { useEffect } from 'react'




const BarStack = () => {
    useEffect(() => {
        const stackedColumnPlot = new Column('container', {
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
        <div>Bar</div>
    )
}

export default BarStack