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
import Deodirising1 from '../../L1500/Deodirising1';


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
        <div className="marquee-text-container">
          <span className="marquee-text">Your Marquee Text Goes Here</span>
        </div>
      </Header>

      <TopCard></TopCard>

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">

          <div style={{ marginBottom: '10px' }}>
            <Divider orientation='left'>Daily Operational Report</Divider>
            <Row gutter={[20, 10]}>
              <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
                <Card>
                  <DailyReporttable />
                </Card>
              </Col>
              <Col span={10} xs={24} sm={24} md={24} lg={10} xl={10}>
                <Card>
                  <UtilizationGraph container={'dailyutiliztiongraph'} />
                </Card>
              </Col>
            </Row>

          </div>

          <div style={{ marginTop: '5px' }}>
            <Divider orientation='left'>Cost & Utilization</Divider>
            <UtilizationCarosel />
          </div>
        </div>

        <div style={{ marginTop: '10px' }}>

          <Divider orientation='left'>Production Line Monitoring</Divider>
          <Card >
            <Carousel autoplay autoplaySpeed={5000}>
              <div >
                <Bleaching />
              </div>
              <div  >
                <Deodirising1 />
              </div>
            </Carousel>
          </Card>

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

export default Navbar