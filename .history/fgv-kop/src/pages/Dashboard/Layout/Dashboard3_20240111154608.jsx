import React from 'react'

import { Layout, theme, Table } from 'antd';
import './style.css'; // Import your custom styles
import { useEffect, useState } from 'react';
import PlantProcessingStatus from './PlantProcessingStatus';
import './MockTable.css'; // Import a CSS file for styling


const { Header, Content, Footer } = Layout;


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

    const request_log = async () => {
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
            <PlantProcessingStatus ProductData={['L1500', 'CPO']} header={true} />

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