import React from 'react'
import { Badge, Card, Descriptions, Progress, Space } from 'antd';

const Orderdetail = (props) => {
    console.log(props.info);
    const Orderdetails = props.info
    // console.log(Orderdetails.Buyer);
    return (
        <div>
            <Card style={{ background: '#706f6f', color: 'white' , height:'363px' }}>

                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                        <span style={{ fontWeight: 'bold', color:'#FFFFFF' }}>Customer:</span> {Orderdetails.Buyer}
                        <div style={{marginBottom:'10px'}}></div>
                        <span style={{ fontWeight: 'bold' }}>Vessel:</span> {Orderdetails.Vessel}
                        <div style={{marginBottom:'10px'}}></div>
                        <span style={{ fontWeight: 'bold' }}>Product:</span> {Orderdetails.Product}
                        <div style={{marginBottom:'10px'}}></div>

                        <span style={{ fontWeight: 'bold' }}>Order Quantity: </span> <div>{Orderdetails.Quantity} MT</div>
                        <div style={{marginBottom:'10px'}}></div>

                        <span style={{ fontWeight: 'bold' }}>Order Date:</span> {Orderdetails.Laycan[0]}
                        <div style={{marginBottom:'10px'}}></div>

                        <span style={{ fontWeight: 'bold' }}>Delivery Date:</span> {Orderdetails.Laycan[1]}
                        <div style={{marginBottom:'10px'}}></div>

                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail