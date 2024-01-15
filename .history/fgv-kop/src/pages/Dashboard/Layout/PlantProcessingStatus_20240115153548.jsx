import { Card, Table } from 'antd';
import React from 'react'
import moment from 'moment';
import './MockTable.css'; // Import a CSS file for styling

const currentDate = new Date();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();


const PlantProcessingStatus = ({ColorData, ProductData, header}) => {

    const columns = [
        { 
            title: 'Plant ', 
            dataIndex: 'Plant', key: 'Plant', 
            width:'130px',
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


    // console.log(ProductData);

    // console.log(ColorData);

    // data.push(generateMockData('L1500'));
    // data.push(generateMockData('CPO'));
    // data.push(generateMockData('CKPO'));

    return (
        // <Card style={{ height: '100%', background: '#292828' }}>
        <Table showHeader={header} columns={columns} dataSource={ColorData} pagination={false} size='large' className='status-table' bordered scroll={{ x: 970, }} />
        // </Card>
    )


}

export default PlantProcessingStatus