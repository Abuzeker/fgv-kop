import { Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;

const CountDown = ({ Period }) => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * Period + 1000 * 10; // Dayjs is also OK

    return (
        <div>
            <span valueStyle={{color: 'white'}}>
            Time Remaining
            </span>
            <Countdown title="Time Remaining" value={deadline} format="D [Days] H[:] m[:] s " valueStyle={{color: 'white'}} titleStyle={{ color: 'white' }}/>
        </div>
    )
}

export default CountDown