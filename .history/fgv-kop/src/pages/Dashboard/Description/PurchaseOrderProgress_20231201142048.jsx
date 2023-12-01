import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider, Carousel, Statistic } from 'antd'
import { React, useEffect, useState } from 'react';
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import MultiBar from '../Graph/MultiBar';
import { Request_Realtime, Request_order_log } from '../../../api';
import { Merge_attainment_to_details, OrderInfoRawDataProcess } from '../../../DataRequest/LogdataProcess';
import OrderProductDetail from './OrderProductDetail';


let OrderArray = [];
let OrderProducts = [
    {
        product: 'RBDPO',
        produced: 1.8,
        remaining: 3.2,
        todaytarget: 0.3
    },
    {
        product: 'RBDPL',
        produced: 1.8,
        remaining: 3.2,
        todaytarget: 0.3
    },
    {
        product: 'RBDPS',
        produced: 1.8,
        remaining: 3.2,
        todaytarget: 0.3
    },
    {
        product: 'PFAD',
        produced: 1.8,
        remaining: 3.2,
        todaytarget: 0.3
    }
];
let OrderProgressDetails = [

]

const orders = (OrderInfo, OrderProgressInfo) => {
    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={8} xs={24} lg={8}>
                            <Orderdetail info={OrderInfo} />
                        </Col>
                        <Col span={16} xs={24} lg={16}>
                            <OrderProgress info={OrderInfo} Period={5} />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} lg={12}>

                            <Carousel autoplay autoplaySpeed={5000}>
                                <div>
                                    <Card style={{ fill: 'ActiveBorder', background: '#706f6f', color: 'white', height: '620px' }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                Order Timeline
                                            </span>
                                        </div>
                                        <TimelineDetail />
                                    </Card>
                                </div>

                                <div>

                                    <Card style={{ fill: 'ActiveBorder', background: '#706f6f', color: 'white', height: '620px' }}>
                                        {/* <div style={{ marginBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                Order Product
                                            </span>
                                        </div> */}
                                        {/* <OrderProductDetail OrderProducts={OrderProducts} /> */}
                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Order Products
                                        </span>
                                        <div style={{ marginBottom: '20px' }}></div>
                                        {OrderProducts.map((element, index) => (
                                            <div key={index}>
                                                {Product_Progress_UI(element)}
                                                <div style={{ paddingBottom: '10px' }} ></div>
                                            </div>
                                        ))}
                                    </Card>
                                </div>

                            </Carousel>

                        </Col>
                        <Col span={12} xs={24} lg={12}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', height: '620px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
                                        Daily Production
                                    </span>
                                </div>
                                <BarchartWithColor containername={`chart-${OrderInfo.Buyer}`} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};



const PurchaseOrderProgress = () => {

    const [state, setState] = useState({ count: 0 });

    const request_orderinfo_event = async () => {
        const response_order_info = await Request_order_log(["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"])
        const response_progress_info = await Request_Realtime(["Stock Vs Shipment"], ["Anticipated Fulfillment Date", "Attainment Rate",])


        // console.log(response_progress_info);

        // OrderArray = OrderInfoRawDataProcess(response_order_info)

        const OrderArray = Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info),response_progress_info)


        console.log(OrderArray);
        console.log(OrderArray["Anticipated Fulfillment Date"][1]);

        setState(({ count }) => ({ count: count + 1 }));
        console.log('render3');
    }

    useEffect(() => {
        request_orderinfo_event()
        console.log('render2');
        return () => {
        }
    }, [])

    return (
        <div style={{}}>
            {console.log('render1')}
            <Row gutter={[15, 10]} align={'top'}>
                <Col xs={24} lg={12}>
                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Order Detail</Divider>
                    <Carousel fade={true} autoplay autoplaySpeed={10000} >
                        {OrderArray.map((element, index) => (
                            <div key={index}>
                                {orders(element)}
                            </div>
                        ))}
                    </Carousel>
                </Col>


                {/* seperation different carosoul*/}
                <Col span={12} xs={24} lg={12}>
                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>PO Summary</Divider>

                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', }}>
                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    Daily Production Rate
                                </span>
                                <LineWithSegment containername={'sdsddd'} />

                            </Card>

                        </Col>
                        {/* <Divider></Divider> */}
                        <Col span={24}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', }}>
                                <div style={{ marginBottom: '20px' }}>

                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                        Order Effciency
                                    </span>
                                </div>

                                {/* <BarchartWithColor containername={'547'} /> */}
                                {/* <DualaxisBar containername={'sdsdfgg'}/> */}
                                <MultiBar containername={'ser'} />
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default PurchaseOrderProgress


const Product_Progress_UI = (progress) => {

    const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
    const customFormat = percent => (<span style={{ color: 'white' }}>{percent}%</span>)

    return (
        <Row gutter={16}>
            <Col span={24}>
                <div style={{ marginBottom: '0px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                        {progress.product}
                    </span>
                </div>
                <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                    <Row gutter={[10, 0]}>

                        <Col span={8}>
                            <Statistic
                                valueStyle={{ color: 'white', fontSize: '18px' }}
                                title={<span style={{ color: 'white', fontSize: '13px' }}>Produced </span>}
                                value={progress.produced}
                                suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                            />
                        </Col>

                        <Col span={8}>
                            <Statistic
                                valueStyle={{ color: 'white', fontSize: '18px' }}
                                title={<span style={{ color: 'white' }}>Remaining </span>}
                                value={progress.remaining}
                                suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                            />
                        </Col>

                        <Col span={8}>
                            <Statistic
                                valueStyle={{ color: 'white', fontSize: '18px' }}
                                title={<span style={{ color: 'white' }}>Today Target </span>}
                                value={progress.todaytarget}
                                suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                            />
                        </Col>
                    </Row>

                    <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 0px 0px 0px 0px' }}>
                        {/* <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span> */}
                        <Progress percent={70.9} strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                    </div>

                </Space>
            </Col>
        </Row>
    )
}
