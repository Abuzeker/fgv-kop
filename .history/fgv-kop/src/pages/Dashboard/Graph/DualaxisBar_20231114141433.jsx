import React, { useEffect } from 'react';
import { DualAxes } from '@antv/g2plot';

const data = [
  { time: '2019-03', Production: 350, Target: 800 },
  { time: '2019-04', Production: 900, Target: 600 },
  { time: '2019-05', Production: 300, Target: 400 },
  { time: '2019-06', Production: 450, Target: 380 },
  { time: '2019-07', Production: 470, Target: 220 },
];

const paletteSemanticRed = '#F4664A';
const brandColor = '#5B8FF9';

const preprocessData = (data) => {
  return data.map((item) => ({
    ...item,
    color: item.Production < item.Target ? paletteSemanticRed : brandColor,
  }));
};

const DualaxisBar = ({ containername }) => {
  useEffect(() => {
    const processedData = preprocessData(data);

    const dualAxes = new DualAxes(containername, {
      data: [processedData, processedData],
      xField: 'time',
      yField: ['Production', 'Target'],
      geometryOptions: [
        {
          geometry: 'column',
        },
        {
          geometry: 'line',
          lineStyle: {
            lineWidth: 2,
          },
        },
      ],
      columnStyle: ({ data, isStack }) => {
        console.log(data[0].color);
        return {
          fill: data[0].color,
        };
      },
    });

    dualAxes.render();

    return () => {
      dualAxes.destroy();
    };
  }, []);

  return <div id={containername}></div>;
};

export default DualaxisBar;
