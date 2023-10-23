import { Gauge } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';


const PerformanceRate = ({containername, Prate, Pstate}) => {

    useEffect(() => {

        const gauge = new Gauge(containername, {
            percent: 0.75,
            range: {
                ticks: [0, 1 / 3, 2 / 3, 100],
                color: ['#F4664A', '#FAAD14', '#30BF78'],
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
                content: {
                    style: {
                        fontSize: '36px',
                        lineHeight: '36px',
                    },
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



