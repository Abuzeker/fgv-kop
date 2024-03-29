import React from 'react';
import { Table } from 'antd';
import './tablestyle.css'; // Import your custom styles


const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 100,
        fixed: 'left',
    },

    {
        title: (text) => <span style={{ fontSize: '15px' }}>KOP</span>,
        children: [
            {
                title: 'MSM',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'MSML1500',
                        key: 'MSML1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'MSML1000',
                        key: 'MSML1000',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'MSM600TPD',
                        key: 'MSM600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'MSML450',
                        key: 'MSML450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'MSM Total Value',
                        key: 'MSM Total Value',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'MSM Percentage',
                        key: 'MSM Percentage',

                    },
                ]
            },
            {
                title: 'CCNO BLENDED/CPKO',
                children: [
                    {
                        title: 'L1000',
                        dataIndex: 'CCNO BLENDED/ CPKOL1000',
                        key: 'CCNO BLENDED/ CPKOL1000',

                    },
                    {
                        title: '600TPD',
                        dataIndex: 'CCNO BLENDED/ CPKO600TPD',
                        key: 'CCNO BLENDED/ CPKO600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'CCNO BLENDED/ CPKOL450',
                        key: 'CCNO BLENDED/ CPKOL450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'CCNO BLENDED/ CPKO TOTAL PROCESS',
                        key: 'CCNO BLENDED/ CPKO TOTAL PROCESS',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'CCNO BLENDED/ CPKO Percentage',
                        key: 'CCNO BLENDED/ CPKO Percentage',
                    },
                ]
            },

        ],
    },

];


const DailyReporttable = ({data}) => {
    console.log(data);
    return (
        < Table
            bordered
            style={{
                backgroundColor: '#292828', // Set background color to gray
                color: 'white', // Set text color to white
            }}
            className="report-table"
            pagination={true}
            columns={columns}
            dataSource={data}
            size="medium"
            scroll={{ x: 970, y: 300 }} />
    )
}

export default DailyReporttable

