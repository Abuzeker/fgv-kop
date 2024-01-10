import { Card, Table } from 'antd';
import React from 'react'
import moment from 'moment';
import './MockTable.css'; // Import a CSS file for styling

const daysInMonth = 31;
const columns = [];

const generateColumns = () => {
    // Generate columns dynamically
    for (let i = 1; i <= daysInMonth; i++) {
      columns.push({
        title: (
          <div style={{ background: '#292828', color: 'white', textAlign: 'center' }}>
            {`Day ${i}`}
          </div>
        ),
        dataIndex: `day${i}`,
        key: `day${i}`,
        render: (color) => (
          <div style={{ backgroundColor: color, height: '50px', margin: '0', padding: '0' }} />
        ),
      });
    }
};

const generateDataSource = () => {
    // Sample data, replace it with your actual data
    const data = [
        // Example data for each day
        { key: 1, day1: 'Data1', day2: 'Data2', /* ... */ },
        // Add more rows as needed
    ];

    return data;
};

const generateMockData = () => {
    const daysInMonth = moment().daysInMonth();
    const mockData = [];

    // Example line
    const line = 'L1500';

    // Generate random colors for each day
    const daysObject = {};
    for (let day = 1; day <= daysInMonth; day++) {
        const dayKey = `day${day}`;
        daysObject[dayKey] = getRandomColor();
    }

    // Add line information to the data
    const dataObject = { Line: line, ...daysObject };
    mockData.push(dataObject);

    return mockData;
};

const getRandomColor = () => {
    const colors = ["#ff0000", "#ffff00", "#00ff00", "#0000ff"]; // Red, Yellow, Green, Blue
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };


const PlantProcessingStatus = () => {

    const columns = [
        { title: 'Plant', dataIndex: 'Line', key: 'Line' },
        ...Array.from({ length: 31 }, (_, index) => ({
            title: `${index + 1}`,
            dataIndex: `day${index + 1}`,
            key: `day${index + 1}`,
            align: 'center',
            render: (text, record) => (
                <div className="color-cell" style={{ backgroundColor: text }}></div>
            ),
        })),
    ];

    const data = generateMockData();

    return (
        // <Card style={{ height: '100%', background: '#292828' }}>
        <Table  columns={columns} dataSource={data} pagination={false} size='large' className='status-table' bordered/>
        // </Card>
    )


}

export default PlantProcessingStatus