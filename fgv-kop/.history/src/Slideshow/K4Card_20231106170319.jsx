import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Chilled Water']}>
            <Stearine key={'Stearine'}/>
            <Chilled key={'Chilled Water'}/>
        </HMIWrapper>
    </div>
  )
}

export default K4Card