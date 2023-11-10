import React from 'react'
import { Badge, Card, Descriptions } from 'antd';
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

const Orderdetail = () => {
    return (
        <div>
            <Card title={'Order Info'}>
                Customer: FGV
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />

            </Card>
            {/* <Descriptions title="Order Info" bordered items={items} size='small'/> */}
        </div>
    )
}

export default Orderdetail