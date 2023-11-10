import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const TimelineDetail = () => {
    return (
        <div>
            <Timeline
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
                        children: 'Production Stop: Chiller Inspection (8/1/2023)',
                    },
                    {
                        color: 'green',
                        children: 'Production Continue: 9/1/2023',
                    },
                    {
                        children: 'Production Completed',
                    },
                    {
                        dot: (
                            <ClockCircleOutlined
                                style={{
                                    fontSize: '16px',
                                }}
                            />
                        ),
                        children: 'Technical testing 2015-09-01',
                    },
                ]}
            /></div>
    )
}

export default TimelineDetail