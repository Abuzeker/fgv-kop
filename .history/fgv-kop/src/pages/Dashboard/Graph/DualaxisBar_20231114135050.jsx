import React, { useState, useEffect } from 'react';
import { DualAxes } from '@antv/g2plot';

const data = [
    { time: '2019-03', Production: 350, Target: 800 },
    { time: '2019-04', Production: 900, Target: 600 },
    { time: '2019-05', Production: 300, Target: 400 },
    { time: '2019-06', Production: 450, Target: 380 },
    { time: '2019-07', Production: 470, Target: 220 },
];

const DualaxisBar = ({ containername }) => {
    const paletteSemanticRed = '#F4664A';
    const brandColor = '#5B8FF9';

    useEffect(() => {
        const dualAxes = new DualAxes(containername, {
            data: [data, data],
            xField: 'time',
            yField: ['Production', 'Target'],
            geometryOptions: [
                {
                    geometry: 'column',
                    // color: (datum) => (datum['Production'] < datum['Target'] ? 'red' : 'blue'), // Change color based on condition

                    color: ({ type }) => {
                        if (type['Production'] < type['Target']) {
                            return paletteSemanticRed;
                        }
                        return brandColor;
                    },

                },

                {
                    geometry: 'line',
                    lineStyle: {
                        lineWidth: 2,
                    },
                },
            ],
        });

        dualAxes.render();

        return () => {
            dualAxes.destroy();
        };
    }, []);

    return <div id={containername}></div>;
};

export default DualaxisBar;
