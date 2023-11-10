import { Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;

const CountDown = ({ Period }) => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * Period + 1000 * 30; // Dayjs is also OK

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Countdown title="Days" value={deadline} format="D" style={{ fontSize: '16px', marginRight: '8px' }} />
            <span style={{ fontSize: '12px' }}>days</span>
            {/* Repeat this pattern for other units */}
        </div>
    )
}

export default CountDown