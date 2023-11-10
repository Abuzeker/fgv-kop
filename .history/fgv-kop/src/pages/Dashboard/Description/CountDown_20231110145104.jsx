import { Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;

const CountDown = ({ Period }) => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * Period + 1000 * 30; // Dayjs is also OK

    return (
        <div>
            <Countdown title="Time Remaining" value={deadline} format="D [Days] H[:] m[:] s " style={{ fontSize: '200px' }}/>
        </div>
    )
}

export default CountDown