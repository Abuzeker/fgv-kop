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
                        color: 'green',
                    },
                    {
                        dot: (
                            <ClockCircleOutlined
                                style={{
                                    fontSize: '16px',
                                }}
                            />
                        ),
                        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                    },
                    {
                        color: 'red',
                        children: 'Network problems being solved 2015-09-01',
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