import React from 'react'
import { Badge, Card, Col, Descriptions, Progress, Row, Space, Tag } from 'antd';
import { convertToMalaysiaTimeAndFormat } from '../../../DataRequest/UtilityProcess';

const Orderdetail = (props) => {
    const Orderdetails = props.info
    const VesselETA = convertToMalaysiaTimeAndFormat(Orderdetails['Vessel ETA'])
    // console.log(Orderdetails);
    return (
        <div>
            <Card style={{ background: '#292828', color: 'white', height: '100%' }}>

                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>Buyer:</span>
                    <span style={{ fontSize: '18px', }}>{Orderdetails.Buyer}</span>
                    <div style={{ fontSize: '18px', marginBottom: '5px' }}></div>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Vessel:</span>
                    <span style={{ fontSize: '18px', }}>{Orderdetails.Vessel}</span>
                    <div style={{ fontSize: '18px', marginBottom: '5px' }}></div>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Product:</span>

                    <Space direction="horizontal" size={0} style={{ fontSize: '18px', display: 'flex' }}>
                        <Row>
                            {Orderdetails.Products.map((element, index) => (
                                <Col span={8}>
                                    <Tag key={index} color='red'>
                                        {element}
                                    </Tag>
                                </Col>
                            ))}

                        </Row>

                    </Space>

                    {/* {Orderdetails.Products} */}
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Shipment Quantity: </span>

                    <div>
                        <span style={{ fontSize: '20px' }}>
                            {new Intl.NumberFormat().format(Orderdetails.Quantity)} <span style={{fontSize:'16px'}}>MT</span>
                        </span>
                       
                    </div>

                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Laycan:</span> <span style={{ fontSize: '20px', }}>{Orderdetails.Laycan[0]} - {Orderdetails.Laycan[1]}</span>
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Vassel ETA:</span> <span style={{ fontSize: '20px', }}>{VesselETA}</span>
                    <div style={{ marginBottom: '5px' }}></div>

                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail