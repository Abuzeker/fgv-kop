import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Chilled Water','Setting']}>
            <Stearine key={'Stearine'}/>
            <Chilled key={'Chilled Water'}/>
            <ParameterSetting key={'Setting'}/>
        </HMIWrapper>
    </div>
  )
}

export default K4Card