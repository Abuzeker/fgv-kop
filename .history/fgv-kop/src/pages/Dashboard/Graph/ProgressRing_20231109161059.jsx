import { RingProgress } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';



const ProgressRing = ({containername}) => {
    useEffect(() => {
        const ringProgress = new RingProgress(containername, {
            height: 200,
            width: 200,
            autoFit: false,
            percent: 0.6,
            color: ['#F4664A', '#E8EDF3'],
            innerRadius: 0.65,
            radius: 0.98,
            statistic: {
              title: {
                style: { color: '#363636', fontSize: '16px', lineHeight: '14px' },
                formatter: () => 'Progress',
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

export default ProgressRing