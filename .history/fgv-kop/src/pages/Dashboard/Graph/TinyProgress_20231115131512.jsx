import { RingProgress } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';



const TinyProgress = ({ containername }) => {
    useEffect(() => {
        const ringProgress = new RingProgress(containername, {
            height: 100,
            // width: 100,
            autoFit: true,
            percent: 0.2,
            color: ['#5B8FF9', '#E8EDF3'],
        });

        ringProgress.render();
        // Access the inner HTML element of the Statistic component
        const statisticContainer = ringProgress.chart.middleGroup.get('children')[1];
        // Apply custom style to change the color of the text
        statisticContainer.getChildren()[0].attr('fill', 'white');
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