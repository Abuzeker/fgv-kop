import { Column } from '@antv/g2plot';
// 也可以在项目中直接使用 lodash
import { each, groupBy } from '@antv/util';
import React, { useState, useEffect } from 'react';



const BarStack = (props) => {

  var data = props.data && props.data["Daily Quantity"]; // Add a null check here


  function extractProductionData(data) {
    // Helper function to extract parameters from the Asset string
    function extractParameters(asset) {
        const match = asset.match(/\:\[(.*?)\]\:/);
        return match ? match[1].split(',').map(s => s.trim()) : [];
    }

    // Function to extract production quantities for given parameters
    function extractProductionQuantities(entry, parameters) {
        return parameters.reduce((acc, param) => {
            const key = `Daily Production Quantity (${param})`;
            if (entry.hasOwnProperty(key)) {
                acc.push({ parameter: param, value: entry[key], date: entry['date'] });
            }
            return acc;
        }, []);
    }

    // Return early if data is empty
    if (data.length === 0) {
        return [];
    }

    // Extract parameters from the first entry's Asset (assuming uniform Asset structure across data)
    const parameters = extractParameters(data[0].Asset);

    // Flat map data to return only the production quantities
    const productionQuantities = data.flatMap(item => extractProductionQuantities(item, parameters));

    return productionQuantities;
}



  const bardataori = extractProductionData(data)

  // Function to convert date strings to Date objects for comparison
function parseDate(dateString) {
  const [day, month, year] = dateString.split('/');
  return new Date(year, month - 1, day); // months are zero-indexed in Date
}

// Sort data by date in descending order
bardataori.sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Filter the data to limit it to the most recent 10 unique dates
function filterByTop10UniqueDates(data) {
  const uniqueDates = new Set(); // To track unique dates
  const filteredData = [];

  for (const entry of data) {
      if (uniqueDates.size >= 10) break; // Stop once we have 10 unique dates
      if (!uniqueDates.has(entry.date)) {
          uniqueDates.add(entry.date);
      }
      filteredData.push(entry);
  }

  return filteredData;
}

const bardata = filterByTop10UniqueDates(bardataori)

  let max = 10, valuearray = []

  const annotations = [];
  each(groupBy(bardata, 'date'), (values, k) => {
    const value = values.reduce((a, b) => a + b.value, 0);
    annotations.push({
      type: 'text',
      position: [k, value],
      content: `${value}`,
      style: { textAlign: 'center', fontSize: 15, fill: 'rgba(255,255,255,1)' },
      offsetY: -10,
    });
    valuearray.push(value)
  }); // <- Added closing parenthesis here
  max = Math.max(...valuearray)
  max = max * 0.1 + max

  // console.log(data);
  // console.log(valuearray);


  useEffect(() => {
    const stackedColumnPlot = new Column(props.containername, {
      data: bardata,
      isStack: true,
      xField: 'date',
      yField: 'value',
      seriesField: 'parameter',
      color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A'],
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
        style: { textAlign: 'center', fontSize: 15, fill: 'rgb(255, 255, 255)' },

        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          // { type: 'adjust-color' },
        ],
      },
      height: 500,
      annotations,
      xAxis: {
        label: {
          style: {
            fill: "#ffffff",
          },
        },
      },
      yAxis: {
        max: max,
        label: {
          style: {
            fill: "#ffffff",
          },
        },
      },
      legend: {
        itemName: {
          style: {
            fill: '#ffffff',
          },
        },
      },
    });

    stackedColumnPlot.render();

    return () => {
      stackedColumnPlot.destroy();
    };
  }, []);

  return <div id={props.containername}></div>;
};

export default BarStack;
