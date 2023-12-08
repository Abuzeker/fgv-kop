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

        const line = new Line('container', {
            data: data,
            xField: 'date',
            yField: 'Todate Quantity',
            seriesField: 'Asset',
            xAxis: {
              type: 'time',
            },
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
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