import React from 'react'
import Dashboard1 from './Dashboard1'
import { Layout } from 'antd';
import Dashboard2 from './Dasbosrd2';

const { Header, Content, Footer } = Layout;

const Dashboard2_Layout = () => {
    console.log('Dashboard 2');

    return (
        <div>
            <Layout className="layout">
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >

                    <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>
                    {/* <MarqueeCard data={DataArray}></MarqueeCard> */}
                </Header>
                <Content
                    style={{
                        padding: '0px 50px 0px 50px',
                        backgroundColor: '#141414',
                        // opacity:0.6
                    }}
                >
                <Dashboard2 />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#141414'
                }}
            >
                <span style={{ color: 'white' }}>
                    FGVR KOP ©2023 Created by IOTCS
                </span>
            </Footer>
        </Layout>
    </div >
  )
}

export default Dashboard2_Layout