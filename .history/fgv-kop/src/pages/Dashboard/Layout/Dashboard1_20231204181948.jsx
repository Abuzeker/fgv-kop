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
import { useState } from 'react';
import { Request_dailydata_log, Request_data_log } from '../../../api';
import { useEffect } from 'react';
import { aggregateAndSortData } from '../../../DataRequest/LogdataProcess';


const { Header, Content, Footer } = Layout;

const Dashboard1 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [state, setState] = useState({ count: 0 });

  let Daily_data = []



  const request_log = async () => {
    const response_order_quantity = await Request_dailydata_log(["2023-11-30T16:00:00Z", "2023-12-06T00:00:00Z"], 
    ["MSM","MSM Total Value", "MSM Percentage","CCNO BLENDED/ CPKO", "CCNO BLENDED/ CPKO TOTAL PROCESS", "CCNO BLENDED/ CPKO Percentage"])

    const originalData = response_order_quantity/* Your provided JSON data */;

    Daily_data = aggregateAndSortData(originalData);
    console.log(Daily_data);

    // OrderArray = Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info), response_progress_info)
    // OrderArray = Merge_quatity(OrderArray, response_order_quantity)

    // OrderArray = merge_log_and_order(OrderArray, response_order_quantity)
    // console.log(OrderArray);


    setState(({ count }) => ({ count: count + 1 }));

    // console.log(response_order_quantity);
    console.log('render3');
  }

  useEffect(() => {
    request_log()
    console.log('render2');
    return () => {
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
        <MarqueeCard></MarqueeCard>
      </Header>

      <Content
        style={{
          padding: '0px 50px 0px 50px',
          backgroundColor: '#141414',

        }}
      >
        <TopCard></TopCard>

        <div className="site-layout-content">

          <Carousel fade={true} autoplay autoplaySpeed={50000} >
            <div style={{ marginBottom: '10px' }}>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Daily Operational Report</Divider>

              <Row gutter={[20, 10]}>

                <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                  <Card style={{ height: '100%', background: '#706f6f' }}>
                    {console.log("rendddd")}
                    <DailyReporttable data={"sd"}/>
                  </Card>
                </Col>

                <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                  <Card style={{ height: '100%', background: '#706f6f' }}>
                    <Carousel fade={true} autoplay autoplaySpeed={5000} >
                      {/* <div>
                        <UtilizationGraph container={'dailyutiliztiongraph'} />
                      </div> */}
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

          </Carousel>

        </div>

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

export default Dashboard1