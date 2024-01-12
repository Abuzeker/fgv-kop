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
    console.log(props.datatodate);

    console.log(props.datatoday);

    // const RBDPL_Total_Produced = parseFloat(props.rbdposhipment['RBDPL Total Produced']) || 0;
    // const RBDPS_Total_Produced = parseFloat(props.rbdposhipment['RBDPS Total Produced']) || 0;
    // const PFAD_Total_Produced = parseFloat(props.rbdposhipment['PFAD Total Produced']) || 0;
    
    // const rbdpo_produced = RBDPL_Total_Produced + RBDPS_Total_Produced + PFAD_Total_Produced;
    
    // const RBDPL_Total_Target = parseFloat(props.rbdposhipment['RBDPL Total Target']) || 0;
    // const RBDPS_Total_Target = parseFloat(props.rbdposhipment['RBDPS Total Target']) || 0;
    // const PFAD_Total_Target = parseFloat(props.rbdposhipment['PFAD Total Target']) || 0;
    
    // const rbdpo_Target = RBDPL_Total_Target + RBDPS_Total_Target + PFAD_Total_Target;
    
    // const SC = ((rbdpo_produced / rbdpo_Target)*100).toFixed(1);

    try { data['Todate (RBDPO)'] = props.datatodate[2]["Todate (RBDPO)"] !== null ? props.datatodate[2]["Todate (RBDPO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (RBDPO)'] = props.datatodate[2]["date"] !== null ? props.datatodate[2]["date"] : 0 } catch (error) { console.log(error); }
    try { data['Today (RBDPO)'] = props.datatoday[0]["Today (RBDPO)"] !== null ? props.datatoday[0]["Today (RBDPO)"] : 0 } catch (error) { console.log(error); }
    try { data['date Today (RBDPO)'] = props.datatoday[0]["date"] !== null ? props.datatoday[0]["date"] : 0 } catch (error) { console.log(error); }
    try { data['UF (ANALISIS HARIAN FRACTIONATION)'] = props.datatodate[2]["UF (ANALISIS HARIAN FRACTIONATION)"] !== null ? props.datatodate[2]["UF (ANALISIS HARIAN FRACTIONATION)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (RBDPO)'] = props.datatodate[2]["date"] !== null ? props.datatodate[2]["date"] : 0 } catch (error) { console.log(error); }
    try { data['Total Cost (RBDPO)'] = props.datatodate[2]["Total Cost (RBDPO)"] !== null ? props.datatodate[2]["Total Cost (RBDPO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (RBDPO)'] = props.datatodate[2]["date"] !== null ? props.datatodate[2]["date"] : 0 } catch (error) { console.log(error); }
    // console.log(props.rbdpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    // console.log(SC);

    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[13, 10]} justify="center">

            <Col span={4} xs={24} sm={12} md={12} lg={8} xl={10}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <Row>
                            <Col span={6} style={{ borderRight: '1px solid white'}}>
                                <span style={{ fontSize: '20px', color: 'white' }}> RBDPO ToDate  </span>

                                <Row gutter={16} align={'middle'}>
                                    <Col span={24}>
                                        <br />
                                        <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['Todate (RBDPO)'])}</span>
                                        <span style={{ fontSize: '15px', color: 'white' }}> MT</span>
                                        <br />
                                        <span style={{ fontSize: '13px' }}>
                                            <InfoCircleOutlined />
                                            <span> {data['date todate (RBDPO)']}</span>
                                        </span>
                                    </Col>
                                    {/* <Col span={12}>
                                        <TinyProgress containername={'cpkotinyprogress'} data={40} />
                                    </Col> */}
                                </Row>
                            </Col>
                            
                            <Col span={18} style={{ paddingLeft: '20px' }}>
                                <span style={{ fontSize: '20px', color: 'white' }}>RBDPO Today  </span>
                                {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPKO)']}</span> */}
                                <div>
                                    <Row gutter={16} align={'middle'}>
                                        <Col span={12}>
                                            <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['Today (RBDPO)'])}</span>
                                            <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                            <br />
                                            <span style={{ fontSize: '13px' }}>
                                                <InfoCircleOutlined />
                                                <span> {data['date Today (RBDPO)']}</span>
                                            </span>
                                        </Col>
                                        <Col span={12}>
                                            <TinyBar containername={'rbdpotinybar'} data={props.rbdpolog} />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={7}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}> RBDPO Cost </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['Total Cost (RBDPO)'])}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date Today (RBDPO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rbdporcvtinybar'} data={props.rbdpocs} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={7}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>RBDPO UF </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(parseFloat(data['UF (ANALISIS HARIAN FRACTIONATION)']).toFixed(2))}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['RBDPO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rbdpocstinybar'} data={props.rbdpoUF} />
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