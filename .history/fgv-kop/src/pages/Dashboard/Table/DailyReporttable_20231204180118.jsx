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


// const res = [
//     {
//         key: index,
//         Date: `${i + 10}/10/2023`,
//         MSML1500: i * 10 + 1000,
//         MSML1000: 'RUN CPKO',
//         MSM600TPD: 'PLANT STOP',
//         MSML450: 'PLANT STOP',
//         MSMTotal: i * 10 + 1000,
//         MSMPercent: `${i * 10}.${i}`,

//         CCNOL1500: 'RUN CPO',
//         CCNOL1000: i * 10 + 1000,
//         CCNO600TPD: 'PLANT STOP',
//         CCNOL450: 'PLANT STOP',
//         CCNOTotal: i * 10 + 1000,
//         CCNOPercent: `${i * 8}.${i}`,
//     },
//     {
//         key: i,
//         Date: `${i + 10}/10/2023`,
//         MSML1500: i * 10 + 1000,
//         MSML1000: 'RUN CPKO',
//         MSM600TPD: 'PLANT STOP',
//         MSML450: 'PLANT STOP',
//         MSMTotal: i * 10 + 1000,
//         MSMPercent: `${i * 10}.${i}`,

//         CCNOL1500: 'RUN CPO',
//         CCNOL1000: i * 10 + 1000,
//         CCNO600TPD: 'PLANT STOP',
//         CCNOL450: 'PLANT STOP',
//         CCNOTotal: i * 10 + 1000,
//         CCNOPercent: `${i * 8}.${i}`,
//     }
// ]




const data = [];
for (let i = 0; i < 7; i++) {
    data.push({
        key: i,
        Date: `${i + 10}/10/2023`,
        MSML1500: i * 10 + 1000,
        MSML1000: 'RUN CPKO',
        MSM600TPD: 'PLANT STOP',
        MSML450: 'PLANT STOP',
        MSMTotal: i * 10 + 1000,
        MSMPercent: `${i * 10}.${i}`,

        CCNOL1500: 'RUN CPO',
        CCNOL1000: i * 10 + 1000,
        CCNO600TPD: 'PLANT STOP',
        CCNOL450: 'PLANT STOP',
        CCNOTotal: i * 10 + 1000,
        CCNOPercent: `${i * 8}.${i}`,
    });
}




const DailyReporttable = (props) => (
    console.log(props.data);
    <Table
        bordered
        style={{
            backgroundColor: '#706f6f', // Set background color to gray
            color: 'white', // Set text color to white
        }}
        className="report-table"
        pagination={false}
        columns={columns}
        dataSource={props.data}
        size="small"
        scroll={{ x: 970, y: 400 }} />
);
export default DailyReporttable;




