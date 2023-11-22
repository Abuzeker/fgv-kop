import React from 'react'
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const TimelineDetail = () => {
    return (
        <div>
            <Timeline
                style={{ color: 'white' }}
                mode="alternate"
                items={[
                    {
                        children: 'Order Create: 1/1/2023',
                    },
                    {
                        children: 'Production Start: 2/1/2023',
                        color:'green'
                    },
                    {
                        color: 'red',
                        children: 'Production Stop Chiller Inspection: 8/1/2023',
                    },
                    {
                        color: 'green',
                        children: 'Production Continue: 9/1/2023',
                    },
                    {
                        children: 'Production Completed: 11/1/2023',
                    },
                    {
                        dot: (
                            <ClockCircleOutlined
                                style={{
                                    fontSize: '16px',
                                }}
                            />
                        ),
                        children: 'Waiting For Delivery: 12/1/2023',
                    },
                    {
                        dot: (
                            <CheckCircleOutlined 
                            style={{
                                fontSize: '16px',
                            }}/>
                        ),
                        color:'white',
                        children: 'Order Completed: 13/1/2023',
                    },

                ]}
            /></div>
    )
}

export default TimelineDetail