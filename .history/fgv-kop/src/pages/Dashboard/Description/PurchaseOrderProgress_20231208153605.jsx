import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider, Carousel, Statistic } from 'antd'
import { React, useEffect, useState } from 'react';
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import MultiBar from '../Graph/MultiBar';
import { Request_Realtime, Request_data_log, Request_order_log } from '../../../api';
import { BarGraphDataProcess, Individual_Product, LineGraphDataProcess, MergeAssetandProductLog, 
    MergeOrderandProduct, MergeProductProgress, MergeProducttoAsset, Merge_attainment_to_details, 
    Merge_quatity, OrderInfoRawDataProcess, Sort_log_with_asset, getSixMonthsRange, merge_log_and_order } from '../../../DataRequest/LogdataProcess';
import OrderProductDetail from './OrderProductDetail';
import OrderSummary from './OrderSummary';
import BarStack from '../Graph/BarStack';


let OrderArray = [];
let OrderProducts = [];
let chunkedTestSet = []
let LineGraphData = [], BarGraphData = []

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

                            <Carousel autoplay autoplaySpeed={8000}>
                                {/* <div>
                                    <Card style={{ fill: 'ActiveBorder', background: '#706f6f', color: 'white', height: '620px' }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                Order Timeline
                                            </span>
                                        </div>
                                        <TimelineDetail />
                                    </Card>
                                </div> */}

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
                                        {OrderInfo['Todate Produced'].map((element, index) => (
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
                                <div style={{ marginBottom: '0px' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
                                        Daily Production
                                    </span>
                                </div>
                                <BarStack containername={`chart-${OrderInfo.Asset}`} data={OrderInfo}/>
                                {/* <BarchartWithColor containername={`chart-${OrderInfo.Asset}`} data={OrderInfo} /> */}
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


const filter_unfinish_order = (Oridata) => {
    let filtered_asset = [], unfinish_order = []
    // console.log(Oridata);
    Oridata.map((element) => {
        element['Attainment Rate'] = isNaN(element['Attainment Rate']) ? 0 : element['Attainment Rate']
        const FRN = element['Attainment Rate']

        if (FRN < 100) {
            filtered_asset.push(element.Asset)
            unfinish_order.push(element)
            // console.log(element.fields.value);
        }
    })
    // console.log(filtered_asset);
    // console.log(unfinish_order);

    return unfinish_order
}

const filter_unfinish_order_name = (Oridata) => {
    let filtered_asset = [], unfinish_order = []
    //  console.log(Oridata);
    Oridata.map((element) => {

        element['Attainment Rate'] = element['Attainment Rate'] ? element['Attainment Rate'] : 0
        const FRN = element['Attainment Rate']

        if (FRN < 100) {
            filtered_asset.push(element.Asset)
            unfinish_order.push(element)
            // console.log(element.fields.value);
        }
    })
    // console.log(filtered_asset);
    // console.log(unfinish_order);

    return filtered_asset
}


const PurchaseOrderProgress = () => {

    const [state, setState] = useState({ count: 0 });

    const request_orderinfo_event = async () => {

        const daterange = getSixMonthsRange()

        const response_progress_info = await Request_Realtime(["Stock Vs Shipment"], ["Anticipated Fulfillment Date", "Attainment Rate",])
        const response_order_info = await Request_order_log(daterange, [])
        const response_order_quantity = await Request_data_log(daterange, ["Todate Quantity", "Today Quantity", "Today Targeted Quantity"], [])


        OrderArray = merge_log_and_order(Merge_quatity(Merge_attainment_to_details(OrderInfoRawDataProcess(response_order_info),
            response_progress_info), response_order_quantity), response_order_quantity)

        OrderArray = filter_unfinish_order(OrderArray)

        LineGraphData = LineGraphDataProcess(OrderArray)
        BarGraphData = BarGraphDataProcess(OrderArray)

        const AssetName = filter_unfinish_order_name(OrderArray)
        
        const response_product_todate_log = await Request_data_log(daterange, ["Todate Quantity (RBDPO)", "Todate Quantity (RBDPL)",
            "Todate Quantity (RBDPS)", "Todate Quantity (PFAD)"], AssetName)
        const asset_product = MergeProducttoAsset(response_product_todate_log)

        OrderProducts = Individual_Product(OrderArray)

        OrderProducts = MergeProductProgress(asset_product, OrderProducts)
        OrderArray = MergeOrderandProduct(OrderArray, OrderProducts)

        const response_product_today_log = await Request_data_log(daterange, ["Today Quantity (RBDPO)", "Today Quantity (RBDPL)",
        "Today Quantity (RBDPS)", "Today Quantity (PFAD)"], AssetName)

        console.log(response_product_today_log);

        MergeAssetandProductLog(OrderArray,response_product_today_log)
        //BarGraphData = BarGraphDataProcess(OrderArray)


        chunkedTestSet = chunkArray(OrderArray, 3)

        setState(({ count }) => ({ count: count + 1 }));
    }

    useEffect(() => {
        request_orderinfo_event()
        // console.log('render2');
        return () => {
        }
    }, [])

    return (
        <div style={{}}>
            {/* {console.log('render1')} */}
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
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', height: '495px' }}>
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

                                    {/* <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
                                            Daily Production Rate
                                        </span>
                                        <LineWithSegment containername={'sdsddd'} data={LineGraphData} />
                                    </div> */}

                                    <div >

                                        <span style={{ fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
                                            Order Effciency
                                        </span>
                                        <MultiBar containername={'ser'} Oridata={BarGraphData} />
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
    // console.log(progress);

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
                                title={<span style={{ color: 'white' }}>Totol Order </span>}
                                value={progress.Target}
                                suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                            />
                        </Col>

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
                    </Row>

                    <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 0px 0px 0px 0px' }}>
                        {/* <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span> */}
                        <Progress percent={parseFloat((progress.produced / progress.Target) * 100).toFixed(1)}
                            strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                    </div>

                </Space>
            </Col>
        </Row>
    )
}
