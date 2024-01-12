import React from 'react'

import { Layout, theme, Table } from 'antd';
import './style.css'; // Import your custom styles
import { useEffect, useState } from 'react';
import PlantProcessingStatus from './PlantProcessingStatus';
import './MockTable.css'; // Import a CSS file for styling
import { Request_color_log, Request_dailydata_log } from '../../../api';
import { Dashboar3_DateMerge } from '../../../DataRequest/LogdataProcess';


const { Header, Content, Footer } = Layout;
let L1500_color = []

const columns = [
    {
        title: 'Status',
        children: [
            {
                title: '80% - 100%',
                dataIndex: '3',
                key: '1',
                render: (text, record) => (
                    <div className="color-cell" style={{ backgroundColor: text }}></div>
                ),
            },
            {
                title: '40% - 80%',
                dataIndex: '2',
                key: '2',
                render: (text, record) => (
                    <div className="color-cell" style={{ backgroundColor: text }}></div>
                ),
            },
            {
                title: '<40%',
                dataIndex: '1',
                key: '3',
                render: (text, record) => (
                    <div className="color-cell" style={{ backgroundColor: text }}></div>
                ),
            },
        ]
    }
]

const datalabel = [
    {
        '1': '#ff0000',
        '2': '#ffff00',
        '3': '#00ff00',
        '4': '#0000ff',
    }

]

const Dashboard3 = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [state, setState] = useState({ count: 0 });

    function getCurrentMonthDateRange() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
    
        // Set the date to the first day of the month
        const startDate = new Date(currentYear, currentMonth, 1);
    
        // Set the date to the last day of the month
        const endDate = new Date(currentYear, currentMonth + 1, 0);
    
        // Function to format a date as ISO string without milliseconds and with 'Z'
        const isoDateString = (date) => date.toISOString().split('.')[0] + 'Z';
    
        return [isoDateString(startDate), isoDateString(endDate)];
    }
    
    const [startDate, endDate] = getCurrentMonthDateRange();
    console.log(startDate, endDate);
    const request_log = async () => {
        const response_quantity = await Request_color_log(
            [startDate, endDate],
            ["Line Status", "CPO Processed", "CPKO Processed", "Recyc. PS", "CPO Total Processed", "CPKO Total Processed", "Recyc. PS Total"],
            ['L1500','L1000','DT600','L450']
            )




        L1500_color = Dashboar3_DateMerge(response_quantity)
        console.log(L1500_color);

        setState(({ count }) => ({ count: count + 1 }));
    }

    useEffect(() => {
        request_log()
        const interval = setInterval(() => {
            request_log()
        }, 300000)

        return () => {
            clearInterval(interval)
            console.log('Unmount Effect Line1RT');
        }

    }, [])

    return (

        <div>
            <PlantProcessingStatus ProductData={['L1500', 'CPO']} ColorData={L1500_color} header={true} />

            <div style={{ padding: '10px' }} ></div>

            <PlantProcessingStatus ProductData={['L1000', 'CPO', 'CPKO', 'Recyc.Ps']} header={false} />
            <div style={{ padding: '10px' }} ></div>

            <PlantProcessingStatus ProductData={['DT600', 'CPO', 'CPKO']} header={false} />
            <div style={{ padding: '10px' }} ></div>

            <PlantProcessingStatus ProductData={['L450', 'CPO', 'CPKO', 'Recyc.Ps']} header={false} />
        </div>


    )
}

export default Dashboard3