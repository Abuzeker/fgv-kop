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

const Navbar = () => {
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

      <PurchaseOrderProgress>

      </PurchaseOrderProgress>

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">

          <div style={{ marginBottom: '10px' }}>
            <Divider orientation='left'>Daily Operational Report</Divider>
            <Row gutter={[20, 10]}>
              <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                <Card style={{ height: '100%' }}
                >
                  <DailyReporttable />
                </Card>
              </Col>
              <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                <Card>

                  <Carousel fade={true} autoplay autoplaySpeed={5000} >
                    <div>
                      <UtilizationGraph container={'dailyutiliztiongraph'} />
                    </div>
                    <div>
                      <PerformanceCarosel />
                    </div>
                  </Carousel>
                </Card>
              </Col>
            </Row>

          </div>

          <div style={{ marginTop: '5px' }}>
            <Divider orientation='left'>Cost & Utilization</Divider>
            <UtilizationCarosel />
          </div>
        </div>

        {/* <PerformanceCarosel /> */}



        {/* <div style={{ marginTop: '10px' }}>

          <Divider orientation='left'>Production Line Monitoring</Divider>
          <Card bordered={true} style={{ borderRadius: 15, width: '100%', height: '100%' }} hoverable={false}>
            <Carousel autoplay autoplaySpeed={5000}>
              <div >
                <Bleaching />
              </div>
              <div  >
                <Duo1></Duo1>
              </div>
            </Carousel>
          </Card>

        </div> */}
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

export default Navbar