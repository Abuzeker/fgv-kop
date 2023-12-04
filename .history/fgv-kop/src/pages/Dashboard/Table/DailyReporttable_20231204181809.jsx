import React from 'react';
import { Table } from 'antd';
import './tablestyle.css'; // Import your custom styles


const columns = [
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
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
                        width: 60,

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
                        dataIndex: 'MSMTotal',
                        key: 'MSMTotal',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'MSMPercent',
                        key: 'MSMPercent',

                    },
                ]
            },
            {
                title: 'CCNO BLENDED/CPKO',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'CCNO BLENDED/ CPKOL1500',
                        key: 'CCNO BLENDED/ CPKOL1500',

                    },
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
                        dataIndex: 'CCNO BLENDED/ CPKOTotal',
                        key: 'CCNO BLENDED/ CPKOTotal',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'CCNO BLENDED/ CPKOPercent',
                        key: 'CCNO BLENDED/ CPKOPercent',
                    },
                ]
            },

        ],
    },

];


const DailyReporttable = () => {
    console.log(this.props.data);
    return (
        // < Table
        //     bordered
        //     style={{
        //         backgroundColor: '#706f6f', // Set background color to gray
        //         color: 'white', // Set text color to white
        //     }}
        //     className="report-table"
        //     pagination={false}
        //     columns={columns}
        //     dataSource={data}
        //     size="small"
        //     scroll={{ x: 970, y: 400 }} />
    )
}

export default DailyReporttable

