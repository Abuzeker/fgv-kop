import React from 'react'

import { Layout,  theme, Table } from 'antd';
import './style.css'; // Import your custom styles
import { useEffect,useState } from 'react';
import PlantProcessingStatus from './PlantProcessingStatus';
import './MockTable.css'; // Import a CSS file for styling


const { Header, Content, Footer } = Layout;


const columns = [
    {
        title: '80% - 100%',
        dataIndex: '1',
        key: '1',
    },
    {
        title: '40% - 80%',
        dataIndex: '2',
        key: '2',
    },
    {
        title: '<40%',
        dataIndex: '3',
        key: '3',
    },
    
]

const datalabel = [
    {
        '1':'asd'
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
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>
            </Header>

            <Content
                style={{
                    padding: '0px 50px 0px 50px',
                    backgroundColor: '#141414',

                }}
            >
                <Table
                    bordered
                    style={{
                        backgroundColor: '#292828',
                        color: 'white',
                        width:'400px'
                    }}
                    className="status-table"
                    pagination={false}
                    columns={columns}
                    dataSource={datalabel}
                    size="medium"
                    scroll={{ x: 970, y: 350 }}
                />

                <PlantProcessingStatus></PlantProcessingStatus>

            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#141414'
                }}
            >
                <span style={{ color: 'white' }}>
                    FGV KOP ©2023 Created by IOTCS

                </span>
            </Footer>
        </Layout>
    )
}

export default Dashboard3