import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Bleaching from '../pages/L1500/Bleaching'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Bleaching']}>
            <Stearine key={'Stearine'}/>
            <Bleaching key={'Bleaching'}/>
        </HMIWrapper>
    </div>
  )
}

export default K4Card