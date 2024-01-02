import { Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;

const CountDown = ({ Period }) => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * Period + 1000 * 10; // Dayjs is also OK

    return (
        <div>
            <span style={{ fontSize: '25px',color: 'white' }}>
                Time Remaining
            </span>
            <Countdown value={deadline} format="D [Days] H[:] m[:] s " valueStyle={{ color: 'white' }} />
        </div>
    )
}

export default CountDown