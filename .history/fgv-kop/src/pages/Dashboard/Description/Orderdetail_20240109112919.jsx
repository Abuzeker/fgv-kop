import React from 'react'
import { Badge, Card, Descriptions, Progress, Space, Tag } from 'antd';

const Orderdetail = (props) => {
    const Orderdetails = props.info
    // console.log(Orderdetails.Products);
    return (
        <div>
            <Card style={{ background: '#292828', color: 'white', height: '420px' }}>

                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                    <span style={{fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>Customer:</span> 
                    <span style={{fontSize: '18px',}}>{Orderdetails.Buyer}</span> 
                    <div style={{ fontSize: '18px',marginBottom: '5px' }}></div>
                    <span style={{fontSize: '18px', fontWeight: 'bold' }}>Vessel:</span> 
                    <span style={{fontSize: '18px',}}>{Orderdetails.Vessel}</span>
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

                    <span style={{ fontSize: '18px',fontWeight: 'bold' }}>Order Quantity: </span> 
                    <div><span style={{fontSize: '18px',}}>{Orderdetails.Quantity} </span>MT</div>
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{ fontSize: '18px',fontWeight: 'bold' }}>Laycan:</span> <span style={{fontSize: '18px',}}>{Orderdetails.Laycan[0]} - {Orderdetails.Laycan[1]}</span>
                    <div style={{ marginBottom: '5px' }}></div>

                    <span style={{fontSize: '18px', fontWeight: 'bold' }}>Delivery Date:</span> <span style={{fontSize: '18px',}}>{Orderdetails.Laycan[1]}</span>
                    <div style={{ marginBottom: '5px' }}></div>

                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail