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
                        children: 'Production Period: 2/1/2023 - 14/1/2023',
                        dot: (
                            <ClockCircleOutlined
                                style={{
                                    fontSize: '16px',
                                }}
                            />
                        ),
                    },
                    {
                        color: 'red',
                        children: 'Production Stop: Chiller Inspection (8/1/2023)',
                    },
                    {
                        children: 'Create a services site 2015-09-01',
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