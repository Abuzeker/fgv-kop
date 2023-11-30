import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider, Carousel } from 'antd'
import { React, useEffect, useState } from 'react';
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import MultiBar from '../Graph/MultiBar';
import { Request_order_log } from '../../../api';
import { OrderInfoRawDataProcess } from '../../../DataRequest/LogdataProcess';
import OrderProductDetail from './OrderProductDetail';

let OrderArray = [];
let Orders_detail_log


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
                            <OrderProgress info={OrderProgressInfo} Period={5} />
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
                                        <OrderProductDetail />
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
        const response_progress_info = await Request_order_log(["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"])


        OrderArray = OrderInfoRawDataProcess(response_order_info)



        console.log(OrderArray);


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