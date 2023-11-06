import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Vacuum from '../pages/L1000/Vacuum'


const K4Card = () => {
    return (
        <div>
            <HMIWrapper Tab={[ 'Stearine']}>
                {/* <Stearine key={'Stearine'}/> */}
                <Vacuum key={'Vacuum'}/>

            </HMIWrapper>
        </div>
    )
}

export default K4Card

