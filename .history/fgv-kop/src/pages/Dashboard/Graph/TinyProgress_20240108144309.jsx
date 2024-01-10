import { RingProgress } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';



const TinyProgress = ({ containername, data }) => {
    useEffect(() => {
        const ringProgress = new RingProgress(containername, {
            height: 100,
            // width: 100,
            autoFit: true,
            percent: data,
            color: ['#5B8FF9', '#E8EDF3'],
            statistic: {
                content: data, // The default content for the Statistic component
                formatter: (datum) => {
                    // Customize the color of the displayed percentage based on the condition
                    return datum > 0.5 ? 'red' : 'green';
                },
            },
        });

        ringProgress.render();
        return () => {
            ringProgress.destroy()
        }
    }, [])



    return (
        <div id={containername}>

        </div>
    )
}

export default TinyProgress