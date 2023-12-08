import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider, Carousel, Statistic } from 'antd'
import { React, useEffect, useState } from 'react';
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import MultiBar from '../Graph/MultiBar';
import { Request_Realtime, Request_data_log, Request_order_log } from '../../../api';
import { Merge_attainment_to_details, Merge_quatity, OrderInfoRawDataProcess, Sort_log_with_asset, merge_log_and_order } from '../../../DataRequest/LogdataProcess';
import OrderProductDetail from './OrderProductDetail';
import OrderSummary from './OrderSummary';


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
let testset = [1, 2, 3, 4, 4, 5, 5, 5, 5, 5];
let chunkedTestSet = []

const orders = (OrderInfo) => {
    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={8} xs={24} lg={8}>
                            <Orderdetail info={OrderInfo} />
                        </Col>
                        <Col span={16} xs={24} lg={16}>
                            <OrderProgress info={OrderInfo} />
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
                                <BarchartWithColor containername={`chart-${OrderInfo.Asset}`} data={OrderInfo} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};


const filter_unfinish_order = (data) =>{
    console.log(data);
    data.map = (element) =>{
        console.log(element["Attainment Rate"]);
    }
}

const PurchaseOrderProgress = () => {

    const [state, setState] = useState({ count: 0 });

    const request_orderinfo_event = async () => {
        const response_order_info = await Request_order_log(["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"])
        const response_progress_info = await Request_Realtime(["Stock Vs Shipment"], ["Anticipated Fulfillment Date", "Attainment Rate",])

        console.log(filter_unfinish_order(response_progress_info));

        const response_order_quantity = await Request_data_log(["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"], ["Todate Quantity", "Today Quantity", "Today Targeted Quantity"])

        OrderArray = Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info), response_progress_info)
        OrderArray = Merge_quatity(OrderArray, response_order_quantity)

        OrderArray = merge_log_and_order(OrderArray, response_order_quantity)
        // console.log(OrderArray);
        chunkedTestSet = chunkArray(OrderArray, 3)


        setState(({ count }) => ({ count: count + 1 }));
        // console.log('render3');
    }

    useEffect(() => {
        request_orderinfo_event()
        // console.log('render2');
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
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', height: '500px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
                                    Ongoing Order
                                </span>
                                <div style={{ marginBottom: '60px' }} ></div>

                                <Carousel autoplay autoplaySpeed={5000} >
                                    {
                                        chunkedTestSet.map((chunk, pageIndex) => (
                                            <div key={pageIndex}>
                                                <Row gutter={[16, 16]}>
                                                    {chunk.map((element, index) => (
                                                        <OrderSummary key={index} info={element} />
                                                    ))}
                                                </Row>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </Card>
                        </Col>

                        <Col span={24}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', }}>
                                <Carousel fade>

                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
                                            Daily Production Rate
                                        </span>
                                        <LineWithSegment containername={'sdsddd'} />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>

                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Order Effciency
                                        </span>
                                        <MultiBar containername={'ser'} />

                                    </div>
                                </Carousel>
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
