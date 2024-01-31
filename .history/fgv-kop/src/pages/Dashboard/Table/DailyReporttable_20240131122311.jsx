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
                        dataIndex: 'CPO600TPD',
                        key: 'CPO600TPD',
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
                        dataIndex: 'CCNO BLENDED/ CPKOL1000',
                        key: 'CCNO BLENDED/ CPKOL1000',

                    },
                    {
                        title: 'DT600',
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

];


const DailyReporttable = ({ data }) => {
    data = data.slice(0, -3);

    console.log(data);
    return (
        // <Card style={{ padding: '0 0 0 0', backgroundColor: '#292828' }}>
            <Table
                bordered
                style={{
                    backgroundColor: '#292828',
                    color: 'white',
                }}
                className="report-table"
                pagination={false}
                columns={columns}
                dataSource={data}
                size="medium"
                scroll={{ x: 970, y: 350 }}
            />
        // </Card>

    )
}

export default DailyReporttable

