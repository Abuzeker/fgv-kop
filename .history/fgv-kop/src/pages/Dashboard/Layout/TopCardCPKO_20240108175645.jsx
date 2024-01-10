import React, { useEffect } from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
};

const TopCPKOCard = (props) => {
    
    console.log(props.cpkoInfo);


    let data = {
        'Today (CPKO)': 0,
        'Todate (CPKO)': 0,
        'CPKO Receive': props.cpkoInfo['CPKO RCV'],
        'CPKO RCV Date': props.cpkoInfo['CPKO RCV Date'],
        'CPKO C/S': props.cpkoInfo['CPKO C/S'],
        'CPKO C/S Date': props.cpkoInfo['CPKO C/S Date'],
    }

    // console.log(props.datatodate);
    // console.log(props.cposhipment);

    const RBDPL_Total_Produced = parseFloat(props.cpkoshipment['RBDPL Total Produced']) || 0;
    const RBDPS_Total_Produced = parseFloat(props.cpkoshipment['RBDPS Total Produced']) || 0;
    const PFAD_Total_Produced = parseFloat(props.cpkoshipment['PFAD Total Produced']) || 0;
    
    const Cpo_produced = RBDPL_Total_Produced + RBDPS_Total_Produced + PFAD_Total_Produced;
    
    const RBDPL_Total_Target = parseFloat(props.cpkoshipment['RBDPL Total Target']) || 0;
    const RBDPS_Total_Target = parseFloat(props.cpkoshipment['RBDPS Total Target']) || 0;
    const PFAD_Total_Target = parseFloat(props.cpkoshipment['PFAD Total Target']) || 0;
    
    const Cpo_Target = RBDPL_Total_Target + RBDPS_Total_Target + PFAD_Total_Target;
    
    const SC = ((Cpo_produced / Cpo_Target)*100).toFixed(1);

    try { data['Todate (CPKO)'] = props.datatodate[0]["Todate (CPKO)"] !== null ? props.datatodate[0]["Todate (CPKO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (CPKO)'] = props.datatodate[0]["date"] !== null ? props.datatodate[0]["date"] : 0 } catch (error) { console.log(error); }
    try { data['Today (CPKO)'] = props.datatoday[0]["Today (CPKO)"] !== null ? props.datatoday[0]["Today (CPKO)"] : 0 } catch (error) { console.log(error); }
    try { data['date Today (CPKO)'] = props.datatoday[0]["date"] !== null ? props.datatoday[0]["date"] : 0 } catch (error) { console.log(error); }


    // console.log(props.cpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    console.log(SC);

    return (
        // <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>ToDate CPKO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Todate (CPKO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date todate (CPKO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpkotinyprogress'} data={40}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Today CPKO </span>
                        {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPKO)']}</span> */}
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (CPKO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date Today (CPKO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkotinybar'} data={props.cpkolog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>RCV CPKO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['CPKO Receive']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPKO RCV Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkorcvtinybar'} data={props.cpkorcvLog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Closing Stock CPKO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['CPKO C/S']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPKO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkocstinybar'} data={props.cpkocs} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                {/* <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Monthly Allocation</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (CPKO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPKO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkoAllocationtinybar'} data={props.cpkolog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col> */}


                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>RKO Closing Stock</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{SC} </span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> %</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPKO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpkoShipmentprogress'} data={SC}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TopCPKOCard