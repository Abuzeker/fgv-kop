import { Column, Pie } from '@antv/g2plot';
import { each, groupBy } from '@antv/util';
import React, { useState, useEffect } from 'react';


const data = [
    {
        Date: '10/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 38000,
    },
    {
        Date: '10/10/2023',
        type: 'PHOSPHORIC',
        Unit: 86000,
    },
    {
        Date: '10/10/2023',
        type: 'LNG',
        Unit: 68000,
    },
    {
        Date: '10/10/2023',
        type: 'ELEKTRIK',
        Unit: 50000,
    },
    {
        Date: '10/10/2023',
        type: 'WATER',
        Unit: 23000,
    },
    {
        Date: '10/10/2023',
        type: 'PAC',
        Unit: 7000,
    },

    {
        Date: '11/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 75566,
    },
    {
        Date: '11/10/2023',
        type: 'PHOSPHORIC',
        Unit: 78524,
    },
    {
        Date: '11/10/2023',
        type: 'LNG',
        Unit: 56754,
    },
    {
        Date: '11/10/2023',
        type: 'ELEKTRIK',
        Unit: 23145,
    },
    {
        Date: '11/10/2023',
        type: 'WATER',
        Unit: 13578,
    },
    {
        Date: '11/10/2023',
        type: 'PAC',
        Unit: 45566,
    },

    {
        Date: '12/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 48000,
    },
    {
        Date: '12/10/2023',
        type: 'PHOSPHORIC',
        Unit: 65752,
    },
    {
        Date: '12/10/2023',
        type: 'LNG',
        Unit: 68326,
    },
    {
        Date: '12/10/2023',
        type: 'ELEKTRIK',
        Unit: 9755,
    },
    {
        Date: '12/10/2023',
        type: 'WATER',
        Unit: 8412,
    },
    {
        Date: '12/10/2023',
        type: 'PAC',
        Unit: 32457,
    },

    {
        Date: '13/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 48000,
    },
    {
        Date: '13/10/2023',
        type: 'PHOSPHORIC',
        Unit: 65752,
    },
    {
        Date: '13/10/2023',
        type: 'LNG',
        Unit: 68326,
    },
    {
        Date: '13/10/2023',
        type: 'ELEKTRIK',
        Unit: 97255,
    },
    {
        Date: '13/10/2023',
        type: 'WATER',
        Unit: 84312,
    },
    {
        Date: '13/10/2023',
        type: 'PAC',
        Unit: 32457,
    },

    {
        Date: '14/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 48000,
    },
    {
        Date: '14/10/2023',
        type: 'PHOSPHORIC',
        Unit: 65752,
    },
    {
        Date: '14/10/2023',
        type: 'LNG',
        Unit: 68326,
    },
    {
        Date: '14/10/2023',
        type: 'ELEKTRIK',
        Unit: 9755,
    },
    {
        Date: '14/10/2023',
        type: 'WATER',
        Unit: 8412,
    },
    {
        Date: '14/10/2023',
        type: 'PAC',
        Unit: 32457,
    },

    {
        Date: '15/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 48000,
    },
    {
        Date: '15/10/2023',
        type: 'PHOSPHORIC',
        Unit: 65752,
    },
    {
        Date: '15/10/2023',
        type: 'LNG',
        Unit: 68326,
    },
    {
        Date: '15/10/2023',
        type: 'ELEKTRIK',
        Unit: 9755,
    },
    {
        Date: '15/10/2023',
        type: 'WATER',
        Unit: 8412,
    },
    {
        Date: '15/10/2023',
        type: 'PAC',
        Unit: 32457,
    },

    {
        Date: '16/10/2023',
        type: 'BLEACHING EARTH',
        Unit: 38000,
    },
    {
        Date: '16/10/2023',
        type: 'PHOSPHORIC',
        Unit: 86000,
    },
    {
        Date: '16/10/2023',
        type: 'LNG',
        Unit: 68000,
    },
    {
        Date: '16/10/2023',
        type: 'ELEKTRIK',
        Unit: 50000,
    },
    {
        Date: '16/10/2023',
        type: 'WATER',
        Unit: 23000,
    },
    {
        Date: '16/10/2023',
        type: 'PAC',
        Unit: 7000,
    },

];

const PieBar = () => {

    useEffect(() => {
        const pie = new Pie('container1', {
            data: pieData,
            colorField: 'type',
            angleField: 'value',
            label: { type: 'inner' },
            tooltip: false,
            state: {
                // 设置【active】激活状态样式 - 无描边
                active: {
                    style: {
                        lineWidth: 0,
                    },
                },
            },
            interactions: [
                {
                    type: 'element-highlight',
                    cfg: {
                        showEnable: [{ trigger: 'element:mouseenter', action: 'cursor:pointer' }],
                        end: [
                            { trigger: 'element:mouseleave', action: 'cursor:default' },
                            { trigger: 'element:mouseleave', action: 'element-highlight:reset' },
                        ],
                    },
                },
            ],
        });

        const column = new Column('container2', {
            data,
            xField: 'city',
            yField: 'value',
            seriesField: 'type',
            isGroup: 'true',
            legend: false,
            columnStyle: {
                radius: [4, 4, 0, 0],
            },
        });

        pie.render();
        column.render();

        return () => {
            pie.destroy()
            column.destroy()
        }
    }, [])

    return (
        <div>
            <div id="container1"></div>
            <div id="container2"></div>
        </div>

    )
}

export default PieBar


