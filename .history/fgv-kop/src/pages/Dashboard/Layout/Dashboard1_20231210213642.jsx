import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import TopCard from './TopCard';
import './style.css'; // Import your custom styles
import DailyReporttable from '../Table/DailyReporttable';
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PerformanceCarosel from './PerformanceCarosel';
import { useState } from 'react';
import { Request_dailydata_log, Request_data_log } from '../../../api';
import { useEffect } from 'react';
import { TenDaysbeforesRange, aggregateAndSortData, getNext10DaysRange } from '../../../DataRequest/LogdataProcess';
import { Sort_Log_by_date, findHighestTodateCPO } from '../../../DataRequest/UtilityProcess';
import Barchart from '../Graph/Barchart';
import BarchartWithColor from '../Graph/BarchartWithColor';
import Utilitytable from '../Table/Utilitytable';


const { Header, Content, Footer } = Layout;
let Daily_data = []
let DataArray = []
let highestCPO = []
let cpolog = []
let cpkolog = []
let rbdpolog = []


const utility_carosel = (utilityData) => {
  return (
    <div>
      <Card title={<div className="custom-card-title">L1000</div>}>
        <Row gutter={[30, 30]} align={'middle'} >

          {/* <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
            <CostefTable />
          </Col> */}

          <Col span={12} xs={24} sm={24} md={24} xl={12} lg={12}>
            {/* <Barchart  data={ []} containername={' quantity'}/> */}
            <BarchartWithColor data={utilityData} />
          </Col>

          <Col span={12} xs={24} sm={24} md={24} xl={12} lg={12}>
            <Utilitytable />
          </Col>
        </Row>
      </Card>
    </div>
  )
}


const Dashboard1 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [state, setState] = useState({ count: 0 });

  const request_log = async () => {

    const request_range_10 = TenDaysbeforesRange()
    // console.log(request_range_10);
    const response_order_quantity = await Request_dailydata_log(request_range_10,
      ["MSM", "MSM Total Value", "MSM Percentage", "CCNO BLENDED/ CPKO", "CCNO BLENDED/ CPKO TOTAL PROCESS", "CCNO BLENDED/ CPKO Percentage"])


    const cpo_product_wuantity = await Request_dailydata_log(request_range_10,
      ['Today (CPO)', 'Todate (CPO)', 'Bleaching Earth Usage (CPO)',
        'Bleaching Earth Cost (CPO)', 'Phosphoric Usage (CPO)', 'Phosphoric Cost (CPO)',
        'LNG Usage (CPO)', 'LNG Cost (CPO)', 'Elektrik Usage (CPO)', 'Elektrik Cost (CPO)',
        'Water Usage (CPO)', 'Water Cost (CPO)', 'Total Cost (CPO)',

        'Today (CPKO)', 'Todate (CPKO)',
        'Bleaching Earth Usage (CPKO)', 'Bleaching Earth Cost (CPKO)', 'Phosphoric Usage (CPKO)', 'Phosphoric Cost (CPKO)',
        'LNG Usage (CPKO)', 'LNG Cost (CPKO)', 'Elektrik Usage (CPKO)', 'Elektrik Cost (CPKO)',
        'Water Usage (CPKO)', 'Water Cost (CPKO)', 'Total Cost (CPKO)', 'Activated (PAC) Usage', 'Activated (PAC) Cost',

        'Today (RBD PO)', 'Todate (RBD PO)',
        'Bleaching Earth Usage (RBD PO)', 'Bleaching Earth Cost (RBD PO)', 'Phosphoric Usage (RBD PO)', 'Phosphoric Cost (RBD PO)',
        'LNG Usage (RBD PO)', 'LNG Cost (RBD PO)', 'Elektrik Usage (RBD PO)', 'Elektrik Cost (RBD PO)',
        'Water Usage (RBD PO)', 'Water Cost (RBD PO)', 'Total Cost (RBD PO)'
      ])

    // console.log(cpo_product_wuantity);

    DataArray = Sort_Log_by_date(cpo_product_wuantity)
    highestCPO = findHighestTodateCPO(DataArray)
    // console.log(highestCPO);

    // console.log(DataArray);
    cpolog = []
    cpkolog = []
    rbdpolog = []

    DataArray.forEach(element => {
      cpolog.push(element['Today (CPO)'])
      cpkolog.push(element['Today (CPKO)'])
      rbdpolog.push(element['Today (RBD PO)'])
    });


    const originalData = response_order_quantity/* Your provided JSON data */;

    Daily_data = aggregateAndSortData(originalData);

    // console.log(Daily_data);

    // OrderArray = Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info), response_progress_info)
    // OrderArray = Merge_quatity(OrderArray, response_order_quantity)

    // OrderArray = merge_log_and_order(OrderArray, response_order_quantity)
    // console.log(OrderArray);


    setState(({ count }) => ({ count: count + 1 }));

    // console.log(response_order_quantity);
    // console.log('render3');
  }

  useEffect(() => {
    request_log()
    // console.log('render2');
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
        <MarqueeCard data={DataArray}></MarqueeCard>
      </Header>

      <Content
        style={{
          padding: '0px 50px 0px 50px',
          backgroundColor: '#141414',

        }}
      >
        <TopCard datatodate={highestCPO} datatoday={DataArray} cpolog={cpolog} cpkolog={cpkolog} rbdpolog={rbdpolog}></TopCard>

        <div className="site-layout-content">

          <Carousel fade={true} autoplay autoplaySpeed={50000} >
            {/* <div style={{ marginBottom: '10px' }}>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Daily Operational Report</Divider>

              <Row gutter={[20, 10]}>

                <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                    <DailyReporttable data={Daily_data} />
                </Col>

                <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                  <Card style={{ height: '100%', background: '#706f6f' }}>
                    <Carousel fade={true} autoplay autoplaySpeed={5000} >
                      <div>
                        <Barchart  data={ DataArray} containername={'day quantity'}/>

                      </div>
                    </Carousel>
                  </Card>
                </Col>

              </Row>
            </div> */}

            <div style={{ marginTop: '5px' }}>
              <Divider orientation='left'>Cost & Utilization</Divider>
              {
                utility_carosel(Daily_data)
              }
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