import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crystalizer456 from '../HMI/KOPFRA4/Crystalizer456'
import Crystalizer789 from '../HMI/KOPFRA4/Crystalizer789'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Chilled Water','Setting']}>
            <Stearine key={'Stearine'}/>
            <Chilled key={'Chilled Water'}/>
            <ParameterSetting key={'Setting'}/>
            <Crystalizer134 key={'Crystallizer 123'}/>
            <Crystalizer456 key={'Crystallizer 456'}/>
            <Crystalizer789 key={'Crystallizer 789'}/>

        </HMIWrapper>
    </div>
  )
}

export default K4Card