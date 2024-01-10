import { Card, Table } from 'antd';
import React from 'react'
import moment from 'moment';

const generateColumns = () => {
    const daysInMonth = moment().daysInMonth();
    const columns = [];

    for (let day = 1; day <= daysInMonth; day++) {
        columns.push({
            title: moment().date(day).format('DD'),
            dataIndex: `day${day}`,
            key: `day${day}`,
        });
    }

    return columns;
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
    // Generate a random hex color code
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const PlantProcessingStatus = () => {


    const columns = [
        { title: 'Line', dataIndex: 'Line', key: 'Line' },
        ...Array.from({ length: 31 }, (_, index) => ({
            title: `Day ${index + 1}`,
            dataIndex: `day${index + 1}`,
            key: `day${index + 1}`,
            render: (text, record) => (
                <div style={{ backgroundColor: text, height: '30px', width: '30px' }} />
            ),
        })),
    ];

    const data = generateMockData();

    return (
        <Card>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
    )


}

export default PlantProcessingStatus