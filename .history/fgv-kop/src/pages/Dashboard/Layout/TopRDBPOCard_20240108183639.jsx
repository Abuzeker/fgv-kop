import React, { useEffect } from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
};

const TopRBDPOCard = (props) => {


    let data = {
        'Today (RBDPO)': 0,
        'Todate (RBDPO)': 0,
        'RBDPO Receive': props.rbdpoInfo['RBDPO RCV'],
        'RBDPO RCV Date': props.rbdpoInfo['RBDPO RCV Date'],
        'RBDPO C/S': props.rbdpoInfo['RBDPO C/S'],
        'RBDPO C/S Date': props.rbdpoInfo['RBDPO C/S Date'],
    }

    console.log(props.rbdpoInfo);
    // console.log(props.rbdposhipment);

    const RBDPL_Total_Produced = parseFloat(props.rbdposhipment['RBDPL Total Produced']) || 0;
    const RBDPS_Total_Produced = parseFloat(props.rbdposhipment['RBDPS Total Produced']) || 0;
    const PFAD_Total_Produced = parseFloat(props.rbdposhipment['PFAD Total Produced']) || 0;
    
    const Cpo_produced = RBDPL_Total_Produced + RBDPS_Total_Produced + PFAD_Total_Produced;
    
    const RBDPL_Total_Target = parseFloat(props.rbdposhipment['RBDPL Total Target']) || 0;
    const RBDPS_Total_Target = parseFloat(props.rbdposhipment['RBDPS Total Target']) || 0;
    const PFAD_Total_Target = parseFloat(props.rbdposhipment['PFAD Total Target']) || 0;
    
    const Cpo_Target = RBDPL_Total_Target + RBDPS_Total_Target + PFAD_Total_Target;
    
    const SC = ((Cpo_produced / Cpo_Target)*100).toFixed(1);

    try { data['Todate (RBD PO)'] = props.datatodate[0]["Todate (RBD PO)"] !== null ? props.datatodate[0]["Todate (RBD PO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (RBD PO)'] = props.datatodate[0]["date"] !== null ? props.datatodate[0]["date"] : 0 } catch (error) { console.log(error); }
    try { data['Today (RBD PO)'] = props.datatoday[0]["Today (RBD PO)"] !== null ? props.datatoday[0]["Today (RBD PO)"] : 0 } catch (error) { console.log(error); }
    try { data['date Today (RBD PO)'] = props.datatoday[0]["date"] !== null ? props.datatoday[0]["date"] : 0 } catch (error) { console.log(error); }


    // console.log(props.rbdpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    console.log(SC);

    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[10, 10]}>

                <Col span={8} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>ToDate RBDPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Todate (RBD PO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date todate (RBD PO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'rbdpotinyprogress'} data={40}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={8} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Today RBDPO </span>
                        {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (RBDPO)']}</span> */}
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (RBD PO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date Today (RBD PO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rbdpotinybar'} data={props.rbdpolog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={8} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Shipment Completion</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{SC} </span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> %</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['RBDPO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'rbdpoShipmentprogress'} data={SC}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TopRBDPOCard