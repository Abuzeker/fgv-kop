import { Gauge } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';


const PerformanceRate = ({ containername, Prate, Pstate }) => {

    useEffect(() => {

        const ticks = [0, 1 / 3, 2 / 3, 1];
        const color = ['#F4664A', '#FAAD14', '#30BF78'];

        const gauge = new Gauge(containername, {
            percent: 0,
            innerRadius: 0.75,
            type: 'meter',
            // 自定义 meter 总步数 以及 step 占比
            meter: {
                steps: 50,
                stepRatio: 0.6,
            },
            range: {
                ticks: [0, 1],
                color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
            },
            indicator: {
                pointer: {
                    style: {
                        stroke: '#D0D0D0',
                    },
                },
                pin: {
                    style: {
                        stroke: '#D0D0D0',
                    },
                },
            },
            statistic: {
                title: {
                    formatter: ({ percent }) => {
                        if (percent < ticks[1]) {
                            return 'BAD';
                        }
                        if (percent < ticks[2]) {
                            return 'INTERMEDIATE';

                        }
                        return 'GOOD';
                    },
                    style: ({ percent }) => {
                        return {
                            fontSize: '36px',
                            lineHeight: 1,
                            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
                        };
                    },
                },
                content: {
                    offsetY: 36,
                    style: {
                        fontSize: '24px',
                        color: '#4B535E',
                    },
                    formatter: () => 'Production Rate',
                },
            },
        });

        gauge.render();



        return () => {
            gauge.destroy()
        }
    }, [])



    return (
        <div id={containername}></div>
    )
}

export default PerformanceRate
