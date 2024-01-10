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
                        dataIndex: 'MSML1500',
                        key: 'MSML1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'MSML1000',
                        key: 'MSML1000',
                    },
                    {
                        title: 'CT600',
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
    // console.log(data);
    return (
        // <Card style={{ padding: '0 0 0 0', backgroundColor: '#292828' }}>
            <Table
                
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

