import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA/Stearine'


const K4Card = () => {
    return (
        <div>
            <HMIWrapper Tab={[ 'Stearine']}>
                <Stearine key={'Stearine'}/>
            </HMIWrapper>
        </div>
    )
}

export default K4Card

