import { Line } from '@antv/g2plot';
import React, { useEffect } from 'react'
import { mocklinedate } from '../../../MockData/LineMock';


// const data = mocklinedate
const LineWithSegment = ({ containername, data }) => {
    console.log(data);

    // console.log(Graph_data);

    useEffect(() => {
        console.log('Graph');

        // const chartdata = data.map((element) => {
        //     // console.log(element["Daily Quantity"])
        //     const dailydata = element["Daily Quantity"]
        //     const combinedata = dailydata.map((element2) => {
        //         element2["Asset"] = element["Asset"]
        //         Graph_data.push(element2)
        //     })
        // })
        // console.log(Graph_data);

        const line = new Line(containername, {
            data: data,
            xField: 'date',
            yField: 'Todate Quantity',
            seriesField: 'Asset',
            // X 轴相关配置
            xAxis: {
                nice: true,
                // tickCount: 8,
                // 文本标签
                label: {
                    // autoRotate: false,
                    rotate: Math.PI / 6,
                    offset: 15,
                    style: {
                        fill: '#ffffff',
                        fontSize: 12,
                    },
                    formatter: (name) => name,
                },
                // title: {
                //     text: 'Date',
                //     style: {
                //         fontSize: 16,
                //     },
                // },
                // 坐标轴线的配置项 null 表示不展示
                line: {
                    style: {
                        stroke: '#ffffff',
                        fill: '#ffffff',
                    },
                },
                tickLine: {
                    style: {
                        lineWidth: 2,
                        stroke: '#ffffff',
                    },
                    length: 5,
                },
                grid: {
                    line: {
                        style: {
                            stroke: '#ffffff',
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
                        fill: '#ffffff',
                        fontSize: 12,
                    },
                    // 数值格式化为千分位
                    formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                },
                title: {
                    text: 'Production (MT)',
                    style: {
                        fontSize: 16,
                        fill: '#ffffff'
                    },
                },
                // 坐标轴线的配置项 null 表示不展示
                line: {
                    style: {
                        stroke: '#ffffff',
                    },
                },
                tickLine: {
                    style: {
                        lineWidth: 2,
                        stroke: '#ffffff',

                    },
                    length: 5,
                },
                grid: {
                    line: {
                        style: {
                            stroke: '#ffffff',
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
                        fill: '#ffffff',
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
    }, [data])


    return (
        <div id={containername}></div>
    )
}

export default LineWithSegment