import React, { useState, useEffect } from 'react';
import { Progress } from '@antv/g2plot';

const BarProgress = ({containername}) => {

    useEffect(() => {
        const progress = new Progress(containername, {
            height: 60,
            width: 300,
            autoFit: false,
            percent: 0.7,
            color: ['#5B8FF9', '#E8EDF3'],
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

