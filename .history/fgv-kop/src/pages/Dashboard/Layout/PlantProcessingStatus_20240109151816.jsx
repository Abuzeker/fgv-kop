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
    for (let day = 1; day <= daysInMonth; day++) {
        const color = getRandomColor();
        const dayKey = `day${day}`;
        const dayData = { Line: line, [dayKey]: color };
        mockData.push(dayData);
    }

    return mockData;
};

const getRandomColor = () => {
    // Generate a random hex color code
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const datamock = generateMockData();

const PlantProcessingStatus = () => {

    //   const  data = []
    const columns = generateColumns();
    // const data = generateDataSource();

    console.log(columns);

    return (
        // <div>
        //     <Table
        //         bordered
        //         style={{
        //             backgroundColor: '#292828',
        //             color: 'white',
        //         }}
        //         className="report-table"
        //         pagination={false}
        //         columns={columns}
        //         dataSource={data}
        //         size="medium"
        //         scroll={{ x: 970, y: 350 }}
        //     />
        // </div>

        <Card>
            <Table columns={columns} dataSource={datamock} pagination={false} />
        </Card>
    )
}

export default PlantProcessingStatus