import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Stearine2']}>
            <Stearine key={'Stearine'}/>
        </HMIWrapper>
    </div>
  )
}

export default K4Card