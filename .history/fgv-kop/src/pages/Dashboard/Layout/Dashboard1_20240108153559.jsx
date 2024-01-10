import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import TopCPOCard from './TopCPOCard';
import './style.css'; // Import your custom styles
import DailyReporttable from '../Table/DailyReporttable';
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PerformanceCarosel from './PerformanceCarosel';
import { useState } from 'react';
import { Request_Realtime, Request_dailydata_log, Request_data_log, Request_order_log } from '../../../api';
import { useEffect } from 'react';

import {
  Individual_Product, MergeAssetandProductLog, MergeOrderandProduct, MergeProductProgress, MergeProducttoAsset, Merge_attainment_to_details, Merge_quatity, OrderInfoRawDataProcess, TenDaysbeforesRange,
  aggregateAndSortData, chunkArray, filter_unfinish_order, filter_unfinish_order_name, getMonthsRange,
  getNext10DaysRange, merge_log_and_order
} from '../../../DataRequest/LogdataProcess';

import { Caculate_ShipmentCompletion, Find_Latest_data, Find_Latest_data_CPKO, Find_Latest_data_CPO, Sort_Log_by_date, extractData, findHighestTodateCPO } from '../../../DataRequest/UtilityProcess';
import Barchart from '../Graph/Barchart';
import BarchartWithColor from '../Graph/BarchartWithColor';
import Utilitytable from '../Table/Utilitytable';
import TopCPKOCard from './TopCardCPKO';


const { Header, Content, Footer } = Layout;
let Daily_data = []
let DataArray = []
let highestCPO = []
let cpolog = []
let cporcvLog = []
let cpocs = []
let cpoMA = []
let cpoSC = []
let CPOCardInfo = []
let CPOShipmentCompletion = []

let cpkolog = []
let cpkorcvLog = []
let cpkocs = []
let cpkoMA = []
let cpkoSC = []
let CPKOCardInfo = []

let OrderArray = [];
let OrderProducts = [];
let chunkedTestSet = []

let rbdpolog = []
let extractedDataCPO = []
let extractedDataCPKO = []
let extractedDataRBDPO = []

const utility_carosel = (utilityData) => {

  const customRenderDots = (onClickHandler, isSelected, index, label) => {
    const styles = {
      // Customize your dot styles here
      width: '12px',
      height: '12px',
      margin: '0 8px',
      background: isSelected ? '#fff' : '#888',
      borderRadius: '50%',
      display: 'inline-block',
      cursor: 'pointer',
    };
  
    return (
      <li key={index} style={styles} onClick={() => onClickHandler(index)} title={`${label || index + 1}`} />
    );
  };

  return (
    <Carousel fade={true} autoplay autoplaySpeed={10000} dotPosition='top' renderDots={customRenderDots}>
    <div>
      <Card style={{ height: '100%', background: '#292828' }}>
        <Carousel fade={true} autoplay autoplaySpeed={3000} >
          <BarchartWithColor data={extractedDataCPO} containername={'cpouti'} type={'Bleaching Earth Usage (CPO)'} />
          <BarchartWithColor data={extractedDataCPO} containername={'cpouti2'} type={'Electric Usage (CPO)'} />
          <BarchartWithColor data={extractedDataCPO} containername={'cpouti3'} type={'Phosphoric Usage (CPO)'} />
          <BarchartWithColor data={extractedDataCPO} containername={'cpouti4'} type={'LNG Usage (CPO)'} />
          <BarchartWithColor data={extractedDataCPO} containername={'cpouti5'} type={'Water Usage (CPO)'} />
        </Carousel>
      </Card>


    </div>
    <div>

          <Card style={{ height: '100%', background: '#292828' }}>
            <Carousel fade={true} autoplay autoplaySpeed={10000} >
              <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti'} type={'Bleaching Earth Usage (CPKO)'} />
              <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti2'} type={'Elektrik Usage (CPKO)'} />
              <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti3'} type={'Phosphoric Usage (CPKO)'} />
              <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti4'} type={'LNG Usage (CPKO)'} />
              <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti5'} type={'Water Usage (CPKO)'} />
            </Carousel>
          </Card>


    </div>
    {/* // <div>

    //       <Card style={{ height: '100%', background: '#292828' }}>
    //         <Carousel fade={true} autoplay autoplaySpeed={9000} >
    //           <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti2'} type={'Elektrik Usage (RBD PO)'} />
    //           <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti4'} type={'LNG Usage (RBD PO)'} />
    //           <BarchartWithColor data={extractedDataRBDPsO} containername={'rbdpouti5'} type={'Water Usage (RBD PO)'} />
    //         </Carousel>
    //       </Card>

    // </div> */}
     </Carousel>

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
    const response_quantity = await Request_dailydata_log(request_range_10,
      ["MSM", "MSM Total Value", "MSM Percentage", "CCNO BLENDED/ CPKO", "CCNO BLENDED/ CPKO TOTAL PROCESS", "CCNO BLENDED/ CPKO Percentage"])


    const cpo_product_wuantity = await Request_dailydata_log(request_range_10,
      ['Today (CPO)', 'Todate (CPO)', 'Bleaching Earth Usage (CPO)',
        'Bleaching Earth Cost (CPO)', 'Phosphoric Usage (CPO)', 'Phosphoric Cost (CPO)',
        'LNG Usage (CPO)', 'LNG Cost (CPO)', 'Elektrik Usage (CPO)', 'Elektrik Cost (CPO)',
        'Water Usage (CPO)', 'Water Cost (CPO)', 'Total Cost (CPO)', 'CPO RCV', 'CPO PROCESS',
        'CPO C/S',

        'Today (CPKO)', 'Todate (CPKO)',
        'Bleaching Earth Usage (CPKO)', 'Bleaching Earth Cost (CPKO)', 'Phosphoric Usage (CPKO)', 'Phosphoric Cost (CPKO)',
        'LNG Usage (CPKO)', 'LNG Cost (CPKO)', 'Elektrik Usage (CPKO)', 'Elektrik Cost (CPKO)',
        'Water Usage (CPKO)', 'Water Cost (CPKO)', 'Total Cost (CPKO)', 'Activated (PAC) Usage', 'Activated (PAC) Cost',
        'CPKO RCV',

        'Today (RBD PO)', 'Todate (RBD PO)',
        'Bleaching Earth Usage (RBD PO)', 'Bleaching Earth Cost (RBD PO)', 'Phosphoric Usage (RBD PO)', 'Phosphoric Cost (RBD PO)',
        'LNG Usage (RBD PO)', 'LNG Cost (RBD PO)', 'Elektrik Usage (RBD PO)', 'Elektrik Cost (RBD PO)',
        'Water Usage (RBD PO)', 'Water Cost (RBD PO)', 'Total Cost (RBD PO)'
      ])

    // console.log(cpo_product_wuantity);

    DataArray = Sort_Log_by_date(cpo_product_wuantity)
    highestCPO = findHighestTodateCPO(DataArray)

    CPOCardInfo = Find_Latest_data_CPO(DataArray)
    CPKOCardInfo = Find_Latest_data_CPKO(DataArray)


    console.log(highestCPO);

    // console.log(DataArray);
    cpolog = []
    cporcvLog = []
    cpocs = []
    cpoMA = []
    cpoSC = []

    cpkolog = []
    cpkorcvLog = []
    cpkocs = []
    cpkoMA = []
    cpkoSC = []


    rbdpolog = []

    DataArray.forEach(element => {
      cpolog.push(element['Today (CPO)'])
      cporcvLog.push(element['CPO RCV'])
      cpocs.push(element['CPO C/S'])
      cpoMA.push(element['Today (CPO)'])
      cpoSC.push(element['Today (CPO)'])

      cpkolog.push(element['Today (CPKO)'])
      cpkorcvLog.push(element['CPKO RCV'])
      cpkocs.push(element['CPKO C/S'])
      cpkoMA.push(element['Today (CPKO)'])
      cpkoSC.push(element['Today (CPKO)'])

      rbdpolog.push(element['Today (RBD PO)'])


    });


    const originalData = response_quantity/* Your provided JSON data */;

    Daily_data = aggregateAndSortData(originalData);

    try {
      extractedDataCPO = extractData(DataArray, 'CPO').slice().reverse();
      extractedDataCPKO = extractData(DataArray, 'CPKO').slice().reverse();
      extractedDataRBDPO = extractData(DataArray, 'RBD PO').slice().reverse();
    } catch (error) { }



    ///order

    const daterange = getMonthsRange(6)

    const response_progress_info = await Request_Realtime(["Stock Vs Shipment"], ["Anticipated Fulfillment Date", "Attainment Rate",])
    const response_order_info = await Request_order_log(daterange, [])
    const response_order_quantity = await Request_data_log(daterange, ["Todate Quantity", "Today Quantity", "Today Targeted Quantity"], [])


    OrderArray = merge_log_and_order(Merge_quatity(Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info),
      response_progress_info), response_order_quantity), response_order_quantity)

    OrderArray = filter_unfinish_order(OrderArray)

    const AssetName = filter_unfinish_order_name(OrderArray)

    const response_product_todate_log = await Request_data_log(daterange, ["Todate Quantity (RBDPO)", "Todate Quantity (RBDPL)",
      "Todate Quantity (RBDPS)", "Todate Quantity (PFAD)"], AssetName)
    const asset_product = MergeProducttoAsset(response_product_todate_log)

    OrderProducts = Individual_Product(OrderArray)

    OrderProducts = MergeProductProgress(asset_product, OrderProducts)
    OrderArray = MergeOrderandProduct(OrderArray, OrderProducts)

    const range10 = getNext10DaysRange()

    const response_product_today_log = await Request_data_log(range10, ["Today Quantity (RBDPO)", "Today Quantity (RBDPL)",
      "Today Quantity (RBDPS)", "Today Quantity (PFAD)"], AssetName)

    MergeAssetandProductLog(OrderArray, response_product_today_log)
    //BarGraphData = BarGraphDataProcess(OrderArray)

    console.log(OrderArray);

    CPOShipmentCompletion = Caculate_ShipmentCompletion(OrderArray)
    // console.log(CPOShipmentCompletion);


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

        {/* <MarqueeCard data={DataArray}></MarqueeCard> */}
      </Header>

      <Content
        style={{
          padding: '0px 50px 0px 50px',
          backgroundColor: '#141414',

        }}
      >
        <TopCPOCard datatodate={highestCPO} datatoday={DataArray} cpolog={cpolog} cporcvLog={cporcvLog}
          cpocs={cpocs} cpoMA={cpoMA} cpoInfo={CPOCardInfo} cposhipment={CPOShipmentCompletion}></TopCPOCard>

        <TopCPKOCard datatodate={highestCPO} datatoday={DataArray} cpkolog={cpkolog} cpkorcvLog={cpkorcvLog}
          cpkocs={cpkocs} cpkoMA={cpkoMA} cpkoInfo={CPKOCardInfo} cpkoshipment={CPOShipmentCompletion}></TopCPKOCard>

        <div className="site-layout-content">

          <Carousel fade={true} autoplay autoplaySpeed={30000} >
            {/* <div style={{ marginBottom: '10px' }}>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Daily Operational Report</Divider>

              <Row gutter={[20, 10]}>

                <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                  <DailyReporttable data={Daily_data} />
                </Col>

                <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                  <Card style={{ height: '100%', background: '#292828' }}>
                    <Carousel fade={true} autoplay autoplaySpeed={5000} >
                      <div>
                        <Barchart data={DataArray} containername={'day quantity'} />
                      </div>
                    </Carousel>
                  </Card>
                </Col>

              </Row>
            </div> */}

            <div style={{ marginTop: '5px' }}>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Cost & Utilization</Divider>
              {
                utility_carosel(extractedDataCPO)
              }
            </div>

          </Carousel>

        </div>
        <div style={{ marginBottom: '45px' }} />

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