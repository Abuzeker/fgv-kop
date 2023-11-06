import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import StearineHMI from '../HMI/KOPFRA4/StearineHMI'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 's']}>
            <StearineHMI key={'s'}/>
        </HMIWrapper>
    </div>
  )
}

export default K4Card