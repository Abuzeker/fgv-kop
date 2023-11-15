import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import TopCard from './TopCard';
import CostefTable from '../Table/CostefTable';
import './style.css'; // Import your custom styles
import DailyReporttable from '../Table/DailyReporttable';
import UtilizationGraph from '../Graph/UtilizationGraph';
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import Bleaching from '../../L1500/Bleaching';
import Duo1 from '../../L1500/Duo1';
import Sdtest from '../../../HMI/L1500/Sdtest';
import PerformanceRate from '../Graph/PerformanceRate';
import PerformanceCarosel from './PerformanceCarosel';
import PurchaseOrderProgress from '../Description/PurchaseOrderProgress';


const { Header, Content, Footer } = Layout;

const Dashboard2 = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
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
                    <Carousel fade={true} autoplay autoplaySpeed={5000} >

                        <PurchaseOrderProgress />
                        
                        <Carousel fade={true} autoplay autoplaySpeed={5000} >
                            <div>
                                <UtilizationGraph container={'dailyutiliztiongraph'} />
                            </div>
                            <div>
                                <PerformanceCarosel />
                            </div>
                        </Carousel>

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
    )
}

export default Dashboard2