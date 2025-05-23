import React from 'react'
import { Layout } from 'antd';
import Dashboard4 from './Dashboard4';

const { Header, Content, Footer } = Layout;

const Dashboard4_Layout = () => {
    console.log('Dashboard 4');

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
                <Dashboard4 />
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

export default Dashboard4_Layout