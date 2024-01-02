import React from 'react'
import { Badge, Card, Descriptions, Progress, Space, Tag } from 'antd';

const Orderdetail = (props) => {
    const Orderdetails = props.info
    // console.log(Orderdetails.Products);
    return (
        <div>
            <Card style={{ background: '#706f6f', color: 'white', height: '363px' }}>

                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                    <span style={{fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>Customer:</span> <span>{Orderdetails.Buyer}</span> 
                    <div style={{ fontSize: '18px',marginBottom: '5px' }}></div>
                    <span style={{fontSize: '18px', fontWeight: 'bold' }}>Vessel:</span> {Orderdetails.Vessel}
                    <div style={{ fontSize: '18px',marginBottom: '5px' }}></div>
                    <span style={{ fontSize: '18px',fontWeight: 'bold' }}>Product:</span>

                    <Space direction="horizontal" size={0} style={{fontSize: '18px', display: 'flex' }}>
                            {Orderdetails.Products.map((element, index) => (
                                <Tag key={index} color='red'>
                                    {element}
                                </Tag>
                            ))}
                    </Space>

                    {/* {Orderdetails.Products} */}
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px',fontWeight: 'bold' }}>Order Quantity: </span> <div>{Orderdetails.Quantity} MT</div>
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px',fontWeight: 'bold' }}>Order Date:</span> {Orderdetails.Laycan[0]}
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{fontSize: '18px', fontWeight: 'bold' }}>Delivery Date:</span> {Orderdetails.Laycan[1]}
                    <div style={{ marginBottom: '5px' }}></div>

                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail