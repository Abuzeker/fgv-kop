import { Line } from '@antv/g2plot';
import React, { useEffect } from 'react'
import { mocklinedate } from '../../../MockData/LineMock';


const data = mocklinedate

const LineWithSegment = ({ containername }) => {

    useEffect(() => {
        const line = new Line(containername, {
            data: data
                .slice(data.length - 90, data.length)
                .filter((item) => item.category === 'Gas fuel' || item.category === 'Cement production'),
            xField: 'year',
            yField: 'value',
            seriesField: 'category',
            // X 轴相关配置
            xAxis: {
                nice: true,
                // tickCount: 8,
                // 文本标签
                label: {
                    // autoRotate: false,
                    rotate: Math.PI / 6,
                    offset: 10,
                    style: {
                        fill: '#aaa',
                        fontSize: 12,
                    },
                    formatter: (name) => name,
                },
                title: {
                    text: 'Date',
                    style: {
                        fontSize: 16,
                    },
                },
                // 坐标轴线的配置项 null 表示不展示
                line: {
                    style: {
                        stroke: '#aaa',
                    },
                },
                tickLine: {
                    style: {
                        lineWidth: 2,
                        stroke: '#aaa',
                    },
                    length: 5,
                },
                grid: {
                    line: {
                        style: {
                            stroke: '#ddd',
                            lineDash: [4, 2],
                        },
                    },
                    alternateColor: 'rgba(0,0,0,0.05)',
                },
            },
            // Y 轴相关配置
            yAxis: {
                // max: 3000,
                // 文本标签
                label: {
                    autoRotate: false,
                    style: {
                        fill: '#aaa',
                        fontSize: 12,
                    },
                    // 数值格式化为千分位
                    formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                },
                title: {
                    text: 'Production (MT)',
                    style: {
                        fontSize: 16,
                    },
                },
                // 坐标轴线的配置项 null 表示不展示
                line: {
                    style: {
                        stroke: '#aaa',
                    },
                },
                tickLine: {
                    style: {
                        lineWidth: 2,
                        stroke: '#aaa',
                    },
                    length: 5,
                },
                grid: {
                    line: {
                        style: {
                            stroke: '#ddd',
                            lineDash: [4, 2],
                        },
                    },
                    alternateColor: 'rgba(0,0,0,0.05)',
                },
            },
            // label
            label: {
                layout: [{ type: 'hide-overlap' }], // 隐藏重叠label
                style: {
                    textAlign: 'right',
                },
                formatter: (item) => item.value,
            },
            // point
            point: {
                size: 5,
                style: {
                    lineWidth: 1,
                    fillOpacity: 1,
                },
                shape: (item) => {
                    if (item.category === 'Cement production') {
                        return 'circle';
                    }
                    return 'diamond';
                },
            },
            annotations: [
                // 辅助线
                // {
                //     type: 'line',
                //     start: ['0%', '10%'],
                //     end: ['100%', '10%'],
                //     top: true,
                //     style: {
                //         stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                //         lineWidth: 2,
                //     },
                // },
                // 辅助区域
                {
                    type: 'region',
                    start: ['0%', '0%'],
                    end: ['20%', '10%'],
                    top: true,
                    style: {
                        fill: '#1890ff',
                        fillOpacity: 1,
                        opacity: 1,
                    },
                },
                // 辅助文本
                {
                    type: 'text',
                    position: ['10%', '5%'],
                    content: 'Daily Production',
                    style: {
                        fill: '#fff',
                        fontSize: 12,
                        textAlign: 'center',
                        textBaseline: 'middle',
                        shadowColor: '#fff',
                        shadowOffsetX: 12,
                        shadowOffsetY: 12,
                        // shadowBlur: 2,
                    },
                }, // 辅助线
                {
                    type: 'line',
                    start: ['min', 'median'],
                    end: ['max', 'median'],
                    style: {
                        stroke: 'Turquoise',
                        lineDash: [4, 2],
                    },
                },
            ],
            legend: {
                position: 'top-right',
                itemName: {
                    style: {
                        fill: '#000',
                    },
                    formatter: (name) => name,
                },
            },
            // 度量相关配置
            meta: {
                // year 对应 xField || yField
                year: {
                    range: [0, 1],
                },
            },
        });

        line.render();



        return () => {
            line.destroy()
        }
    }, [])


    return (
        <div id={containername}></div>
    )
}

export default LineWithSegment