import { Card, Table } from 'antd';
import React from 'react'
import moment from 'moment';
import './MockTable.css'; // Import a CSS file for styling

const currentDate = new Date();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();


const generateMockData = (plant) => {
    const daysInMonth = moment().daysInMonth();
    // Example line
    const line = plant;
    // Generate random colors for each day
    const daysObject = {};
    for (let day = 1; day <= daysInMonth; day++) {
        const dayKey = `day${day}`;
        daysObject[dayKey] = getRandomColor();
    }

    // Add line information to the data
    const dataObject = { Line: line, ...daysObject };
    dataObject.Total = '123'
    // mockData.push(dataObject);
    return dataObject;
};

const getRandomColor = () => {
    const colors = ["#ff0000", "#ffff00", "#00ff00", "#0000ff"]; // Red, Yellow, Green, Blue
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};


const PlantProcessingStatus = ({ColorData, ProductData}) => {

    const columns = [
        { 
            title: 'Plant', dataIndex: 'Line', key: 'Line', 
            render:(text,record) =>(
                <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            )
        },
        ...Array.from({ length: daysInMonth }, (_, index) => ({
            title: `${index + 1}`,
            dataIndex: `day${index + 1}`,
            key: `day${index + 1}`,
            align: 'center',
            render: (text, record) => (
                <div className="color-cell" style={{ backgroundColor: text, align: 'center' }}></div>
            ),
        })),
        {
            title: 'Total', dataIndex: 'Total', key: 'Total', 
            render:(text,record) =>(
                <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            )
        }
    ];

    const data = []

    ProductData.forEach(element => {
        data.push(generateMockData(element));
    });

    // data.push(generateMockData('L1500'));
    // data.push(generateMockData('CPO'));
    // data.push(generateMockData('CKPO'));

    return (
        // <Card style={{ height: '100%', background: '#292828' }}>
        <Table showHeader={false} columns={columns} dataSource={data} pagination={false} size='large' className='status-table' bordered scroll={{ x: 970, }} />
        // </Card>
    )


}

export default PlantProcessingStatus