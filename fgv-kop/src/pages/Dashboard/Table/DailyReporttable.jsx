import React from 'react';
import { Card, Table } from 'antd';
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

                title: 'CPO',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'CPOL1500',
                        key: 'CPOL1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'CPOL1000',
                        key: 'CPOL1000',
                    },
                    {
                        title: 'DT600',
                        dataIndex: 'CPODT600',
                        key: 'CPODT600',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'CPOL450',
                        key: 'CPOL450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'CPO Total Value',
                        key: 'CPO Total Value',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'CPO Percentage',
                        key: 'CPO Percentage',

                    },
                ]
            },
            {
                title: 'CPKO/CCNO BLENDED',
                children: [
                    {
                        title: 'L1000',
                        dataIndex: 'CPKO/ CCNO BLENDEDL1000',
                        key: 'CPKO/ CCNO BLENDEDL1000',

                    },
                    {
                        title: 'DT600',
                        dataIndex: 'CPKO/ CCNO BLENDEDDT600',
                        key: 'CPKO/ CCNO BLENDEDDT600',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'CPKO/ CCNO BLENDEDL450',
                        key: 'CPKO/ CCNO BLENDEDL450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'CPKO/ CCNO BLENDED TOTAL PROCESS',
                        key: 'CPKO/ CCNO BLENDED TOTAL PROCESS',
                    },
                    {
                        title: '(%)',
                        dataIndex: 'CPKO/ CCNO BLENDED Percentage',
                        key: 'CPKO/ CCNO BLENDED Percentage',
                    },
                ]
            },

];


const DailyReporttable = ({ data }) => {
    data = data.slice(0, -7);

    console.log(data);
    return (
        // <Card style={{ padding: '0 0 0 0', backgroundColor: '#292828' }}>
            <Table
                bordered
                style={{
                    backgroundColor: '#292828',
                    color: 'white',
                    zIndex: 1
                }}
                className="report-table"
                pagination={false}
                columns={columns}
                dataSource={data}
                size="medium"
            />
        // </Card>

    )
}

export default DailyReporttable

