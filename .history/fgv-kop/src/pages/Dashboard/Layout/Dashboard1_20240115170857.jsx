import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel, Table } from 'antd';
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

import { Caculate_ShipmentCompletion, Find_Latest_data, Find_Latest_data_CPKO, Find_Latest_data_CPO, Find_Latest_data_RBDPO, Sort_Log_by_date, extractData, findHighestTodateCPO } from '../../../DataRequest/UtilityProcess';
import Barchart from '../Graph/Barchart';
import BarchartWithColor from '../Graph/BarchartWithColor';
import Utilitytable from '../Table/Utilitytable';
import TopCPKOCard from './TopCardCPKO';
import TopRBDPOCard from './TopRDBPOCard';
import RemarkTable from '../Table/RemarkTable';
import FractTable from '../Table/FractTable';


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
let rkocs = []

 
let rbdpolog = []
let rbdporcvLog = []
let rbdpocs = []
let rbdpoUF = []
let rbdpoSC = []
let RBDPOCardInfo = []

let OrderArray = [];
let OrderProducts = [];
let chunkedTestSet = []

let extractedDataCPO = []
let extractedDataCPKO = []
let extractedDataRBDPO = []

const utility_carosel_refining = (utilityData) => {
  console.log(utilityData);
  utilityData = utilityData.slice(3);
  // console.log(utilityData);

  return (
    <Carousel fade={true} autoplay autoplaySpeed={10000} dots={false} dotPosition='top'>
      <div>
        <Carousel fade={true} autoplay autoplaySpeed={3000} dotPosition='left'>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti'} type={'Bleaching Earth Usage (CPO)'} range={[6.01, 7.01]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti2'} type={'Electric Usage (CPO)'} range={[14.01, 15.01]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti3'} type={'Phosphoric Usage (CPO)'} range={[0.55, 0.65]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti4'} type={'LNG Usage (CPO)'} range={[12.01, 12.99]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti5'} type={'Water Usage (CPO)'} range={[0.2, 0.3]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPO} containername={'cpouti6'} type={'Total Cost (CPO)'} range={[27.0, 28.0]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>

      <div>
        <Carousel fade={true} autoplay autoplaySpeed={3000} dotPosition='left'>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti'} type={'Bleaching Earth Usage (CPKO)'} range={[6, 7]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti2'} type={'Electric Usage (CPKO)'} range={[14, 15]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti3'} type={'Phosphoric Usage (CPKO)'} range={[0.55, 0.65]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti4'} type={'LNG Usage (CPKO)'} range={[12.01, 12.99]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti5'} type={'Water Usage (CPKO)'} range={[0.2, 0.3]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[10, 10]}>
              <Col span={16}>
                <Card style={{ height: '100%', background: '#292828' }}>
                  <BarchartWithColor data={extractedDataCPKO} containername={'cpkouti6'} type={'Total Cost (CPKO)'} range={[27.0, 28.0]} height={300} />
                </Card>
              </Col>
              <Col span={8}>
                <RemarkTable height={390} plant={'Refining'} />
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
      {/* // <div>

    //       <Card style={{ height: '100%', background: '#292828' }}>
    //         <Carousel fade={true} autoplay autoplaySpeed={9000} >
    //           <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti2'} type={'Elektrik Usage (RBDPO)'} />
    //           <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti4'} type={'LNG Usage (RBDPO)'} />
    //           <BarchartWithColor data={extractedDataRBDPsO} containername={'rbdpouti5'} type={'Water Usage (RBDPO)'} />
    //         </Carousel>
    //       </Card>

    // </div> */}
    </Carousel>

  )
}

const utility_carosel_Fract = (utilityData) => {

  return (
    <Carousel fade={true} autoplay autoplaySpeed={3000} dotPosition='left'>
      {/* <div>

        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'crbdpouti'} type={'Bleaching Earth Usage (RBDPO)'} range={[6.01, 7.01]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>
          </Col>
        </Row>
      </div> */}
      <div>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'crbdpoti2'} type={'Electric Usage (RBDPO)'} range={[14.01, 15.01]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>
          </Col>
        </Row>
      </div>
      {/* <div>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpoti3'} type={'Phosphoric Usage (RBDPO)'} range={[0.55, 0.65]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>          </Col>
        </Row>
      </div> */}
      <div>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti4'} type={'LNG Usage (RBDPO)'} range={[12.01, 12.99]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpoti5'} type={'Water Usage (RBDPO)'} range={[0.2, 0.3]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Card style={{ height: '100%', background: '#292828' }}>
              <BarchartWithColor data={extractedDataRBDPO} containername={'rbdpouti6'} type={'Total Cost (RBDPO)'} range={[27.0, 28.0]} height={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
              <RemarkTable height={600} plant={'Fract'} />
            </Card>
          </Col>
        </Row>
      </div>
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


      const cpo_remark = await Request_dailydata_log(request_range_10,[
        'Bleaching Earth Usage (CPO) Remark',
        'Bleaching Earth Cost (CPO) Remark', 'Phosphoric Usage (CPO) Remark', 'Phosphoric Cost (CPO) Remark',
        'LNG Usage (CPO) Remark', 'LNG Cost (CPO) Remark', 'Electric Usage (CPO) Remark', 'Electric Cost (CPO) Remark',
        'Water Usage (CPO) Remark', 'Water Cost (CPO) Remark',
      ])

      const cpko_remark = await Request_dailydata_log(request_range_10,[
        'Bleaching Earth Usage (CPKO) Remark',
        'Bleaching Earth Cost (CPKO) Remark', 'Phosphoric Usage (CPKO) Remark', 'Phosphoric Cost (CPKO) Remark',
        'LNG Usage (CPKO) Remark', 'LNG Cost (CPKO) Remark', 'Electric Usage (CPKO) Remark', 'Electric Cost (CPKO) Remark',
        'Water Usage (CPKO) Remark', 'Water Cost (CPKO) Remark',
      ])

      const rbdpo_remark = await Request_dailydata_log(request_range_10,[
        'Bleaching Earth Usage (RBDPO) Remark',
        'Bleaching Earth Cost (RBDPO) Remark', 'Phosphoric Usage (RBDPO) Remark', 'Phosphoric Cost (RBDPO) Remark',
        'LNG Usage (RBDPO) Remark', 'LNG Cost (RBDPO) Remark', 'Electric Usage (RBDPO) Remark', 'Electric Cost (RBDPO) Remark',
        'Water Usage (RBDPO) Remark', 'Water Cost (RBDPO) Remark',
      ])


    const Dataasd = Sort_Log_by_date(cpo_remark)
    console.log(Dataasd);

    const cpo_product_wuantity = await Request_dailydata_log(request_range_10,
      ['Today (CPO)', 'Todate (CPO)', 'Bleaching Earth Usage (CPO)',
        'Bleaching Earth Cost (CPO)', 'Phosphoric Usage (CPO)', 'Phosphoric Cost (CPO)',
        'LNG Usage (CPO)', 'LNG Cost (CPO)', 'Electric Usage (CPO)', 'Electric Cost (CPO)',
        'Water Usage (CPO)', 'Water Cost (CPO)', 'Total Cost (CPO)', 'CPO RCV', 'CPO PROCESS',
        'CPO C/S', 'CPO Total', 'Todate Vs Allocation (CPO RCV)',

        'Bleaching Earth Usage (CPO) Remark',
        'Bleaching Earth Cost (CPO) Remark', 'Phosphoric Usage (CPO) Remark', 'Phosphoric Cost (CPO) Remark',
        'LNG Usage (CPO) Remark', 'LNG Cost (CPO) Remark', 'Electric Usage (CPO) Remark', 'Electric Cost (CPO) Remark',
        'Water Usage (CPO) Remark', 'Water Cost (CPO) Remark',

        'Today (CPKO)', 'Todate (CPKO)',
        'Bleaching Earth Usage (CPKO)', 'Bleaching Earth Cost (CPKO)', 'Phosphoric Usage (CPKO)', 'Phosphoric Cost (CPKO)',
        'LNG Usage (CPKO)', 'LNG Cost (CPKO)', 'Electric Usage (CPKO)', 'Electric Cost (CPKO)',
        'Water Usage (CPKO)', 'Water Cost (CPKO)', 'Total Cost (CPKO)', 'Activated (PAC) Usage', 'Activated (PAC) Cost',
        'CPKO RCV', 'CPKO Total','CPKO C/S','RKO C/S',

        'Today (RBDPO)', 'Todate (RBDPO)',
        'Bleaching Earth Usage (RBDPO)', 'Bleaching Earth Cost (RBDPO)', 'Phosphoric Usage (RBDPO)', 'Phosphoric Cost (RBDPO)',
        'LNG Usage (RBDPO)', 'LNG Cost (RBDPO)', 'Electric Usage (RBDPO)', 'Electric Cost (RBDPO)',
        'Water Usage (RBDPO)', 'Water Cost (RBDPO)', 'Total Cost (RBDPO)', 'RBDPO Total',

        'Tarikh (ANALISIS HARIAN FRACTIONATION)', 'PO (ANALISIS HARIAN FRACTIONATION)', 'PL (ANALISIS HARIAN FRACTIONATION)',
        'PS (ANALISIS HARIAN FRACTIONATION)', 'YLD PL (ANALISIS HARIAN FRACTIONATION)', 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
        'UF (ANALISIS HARIAN FRACTIONATION)'
      ])

    // console.log(cpo_product_wuantity);

    DataArray = Sort_Log_by_date(cpo_product_wuantity)
    console.log(DataArray);

    highestCPO = findHighestTodateCPO(DataArray)
    console.log(highestCPO);

    CPOCardInfo = Find_Latest_data_CPO(DataArray)
    CPKOCardInfo = Find_Latest_data_CPKO(DataArray)
    RBDPOCardInfo = Find_Latest_data_RBDPO(DataArray)

    console.log(RBDPOCardInfo);

    //console.log(RBDPOCardInfo);

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
    rbdporcvLog = []
    rbdpocs = []
    rbdpoUF = []
    rbdpoSC = []
    rbdpolog = []
    rkocs=[]

    DataArray.forEach(element => {
      cpolog.push(element['Today (CPO)'])
      cporcvLog.push(element['CPO RCV'])
      cpocs.push(element['CPO C/S'])
      cpoMA.push(element['Today (CPO)'])
      cpoSC.push(element['Today (CPO)'])

      cpkolog.push(element['Today (CPKO)'])
      cpkorcvLog.push(element['CPKO RCV'])
      cpkocs.push(element['CPKO C/S'])
      rkocs.push(element['RKO C/S'])
      cpkoMA.push(element['Today (CPKO)'])
      cpkoSC.push(element['Today (CPKO)'])

      rbdpolog.push(element['Today (RBDPO)'])
      rbdporcvLog.push(element['RBDPO RCV'])
      rbdpocs.push(element['Total Cost (RBDPO)'])
      rbdpoUF.push(element['UF (ANALISIS HARIAN FRACTIONATION)'])
      rbdpoSC.push(element['Today (RBDPO)'])

      rbdpolog.push(element['Today (RBDPO)'])


    });
    console.log(DataArray);


    const originalData = response_quantity/* Your provided JSON data */;

    Daily_data = aggregateAndSortData(originalData);

    try {
      extractedDataCPO = extractData(DataArray, 'CPO').slice().reverse();
      extractedDataCPKO = extractData(DataArray, 'CPKO').slice().reverse();
      extractedDataRBDPO = extractData(DataArray, 'RBDPO').slice().reverse();
    } catch (error) { }

    console.log(extractedDataRBDPO);

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

    <Carousel fade={true} autoplay autoplaySpeed={30000}>
      <div>
        <TopCPOCard datatodate={highestCPO} datatoday={DataArray} cpolog={cpolog} cporcvLog={cporcvLog}
          cpocs={cpocs} cpoMA={cpoMA} cpoInfo={CPOCardInfo} cposhipment={CPOShipmentCompletion}></TopCPOCard>

        <TopCPKOCard datatodate={highestCPO} datatoday={DataArray} cpkolog={cpkolog} cpkorcvLog={cpkorcvLog} rkocs={rkocs}
          cpkocs={cpkocs} cpkoMA={cpkoMA} cpkoInfo={CPKOCardInfo} cpkoshipment={CPOShipmentCompletion}></TopCPKOCard>


        <Carousel fade={true} autoplay autoplaySpeed={30000} dotPosition='top'>
          <div style={{ marginBottom: '10px' }}>
            <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Daily Report</Divider>

            <Row gutter={[20, 10]}>

              <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                <Card style={{ height: '100%', background: '#292828' }} bodyStyle={{ padding: 0 }}>
                  <DailyReporttable data={Daily_data} />
                </Card>
              </Col>

              <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                <Card style={{ height: '100%', background: '#292828', padding: '0 0 0 0' }}>
                  <Barchart data={DataArray} containername={'day quantity'} por={'Refine'} height={400} />
                </Card>
              </Col>

            </Row>
          </div>

          <div style={{ marginTop: '5px' }}>
            <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Cost & Utilization</Divider>
            {
              utility_carosel_refining(extractedDataCPO)
            }
          </div>

        </Carousel>

        <div style={{ marginBottom: '45px' }} />
      </div>

      <div>
        <TopRBDPOCard datatodate={highestCPO} datatoday={DataArray} rbdpolog={rbdpolog} rbdporcvLog={rbdporcvLog}
          rbdpocs={rbdpocs} rbdpoUF={rbdpoUF} rbdpoInfo={RBDPOCardInfo} rbdposhipment={CPOShipmentCompletion}></TopRBDPOCard>

        <div style={{ marginBottom: '10px' }}>
          <Carousel fade={true} autoplay autoplaySpeed={30000} dotPosition='top'>
            <div>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Daily Report</Divider>

              <Row gutter={[10, 10]}>
                <Col span={14} xs={24} sm={24} md={24} lg={24} xl={14}>
                  <FractTable data={DataArray}></FractTable>
                </Col>

                <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
                  <Card style={{ height: '100%', background: '#292828', padding: '0 0 0 0' }}>
                    <Barchart data={DataArray} containername={'day quantity rdpo'} por={'Fract'} height={600} />
                  </Card>
                </Col>
              </Row>
            </div>

            <div style={{ marginTop: '5px' }}>
              <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Cost & Utilization</Divider>
              {
                utility_carosel_Fract(extractedDataRBDPO)
              }
            </div>

          </Carousel>

        </div>
      </div>

    </Carousel>
  )
}

export default Dashboard1