import React from 'react'
import { Badge, Card, Descriptions, Progress, Space } from 'antd';
const items = [
    {
        key: '1',
        label: 'Buyer',
        children: 'FGV',
    },
    {
        key: '2',
        label: 'Vessel',
        children: 'sdsd',
    },
    {
        key: '3',
        label: 'Product',
        children: 'CPO',
    },
    {
        key: '4',
        label: 'Layer',
        children: '11',
    },
    {
        key: '5',
        label: 'Order Quantity',
        children: '10 MT',
        span: 2,
    },
    {
        key: '6',
        label: 'Order Date',
        children: '1/1/2023',
    },
    {
        key: '7',
        label: 'Delivery Date',
        children: '14/1/2023',
    },
];
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const Orderdetail = (buyer, laycan, product, quatity, vessel) => {
    return (
        <div>
            <Card style={{ background: '#706f6f', color: 'white' , height:'363px' }}>

                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                        <span style={{ fontWeight: 'bold', color:'#FFFFFF' }}>Customer:</span> {buyer}
                        <span style={{ fontWeight: 'bold' }}>Vessel:</span> {vessel}
                        <span style={{ fontWeight: 'bold' }}>Product:</span> {product}
                        <span style={{ fontWeight: 'bold' }}>Laycan:</span> {laycan}
                        <span style={{ fontWeight: 'bold' }}>Order Quantity:</span>{quatity} MT
                        <span style={{ fontWeight: 'bold' }}>Order Date:</span> {laycan[0]}
                        <span style={{ fontWeight: 'bold' }}>Delivery Date:</span> {laycan[1]}
                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail