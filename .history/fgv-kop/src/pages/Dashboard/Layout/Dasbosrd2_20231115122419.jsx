import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel, ConfigProvider } from 'antd';
import TopCard from './TopCard';
import './style.css'; // Import your custom styles
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PurchaseOrderProgress from '../Description/PurchaseOrderProgress';


const { Header, Content, Footer } = Layout;

const Dashboard2 = () => {

    return (
        <ConfigProvider theme={'dark'}>

        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <MarqueeCard></MarqueeCard>
            </Header>
            <TopCard></TopCard>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <div className="site-layout-content">
                    <Carousel fade={true} autoplay autoplaySpeed={10000} >

                        <PurchaseOrderProgress />
                        <div>
                            <Divider orientation='left'>Daily Operational Report</Divider>
                            <UtilizationCarosel />
                        </div>
                    </Carousel>
                </div>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                FGV KOP ©2023 Created by IOTCS
            </Footer>
        </Layout>
        </ConfigProvider>

    )
}

export default Dashboard2