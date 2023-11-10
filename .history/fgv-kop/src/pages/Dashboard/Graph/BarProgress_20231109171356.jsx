import React, { useState, useEffect } from 'react';
import { Progress } from '@antv/g2plot';

const BarProgress = ({ containername }) => {

    useEffect(() => {
        const progress = new Progress(containername, {
            height: 60,
            width: 180,
            autoFit: true,
            percent: 0.7,
            color: ['#5B8FF9', '#E8EDF3'],
            status: {
                show: true,
                position: 'right', // You can change the position to 'top', 'bottom', or 'inside'
                style: {
                    fontSize: 14,
                    textAlign: 'center',
                },
            },
            format: (percent) => `${(percent * 100).toFixed(0)}%`,
        });

        progress.render();


        return () => {
            progress.destroy()
        }
    }, [])




    return (
        <div id={containername}></div>
    )
}

export default BarProgress

