import React from 'react'
import HMIWrapper from './HMIWrapper'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'
import Crystalizer134 from '../HMI/KOPFRA4/Crystalizer134'
import Crsyalizer456 from '../HMI/KOPFRA4/Crsyalizer456'
import Crsyalizer789 from '../HMI/KOPFRA4/Crsyalizer789'

const K4Card = () => {
  return (
    <div>
        <HMIWrapper Tab={[ 'Stearine','Chilled Water','Crystallizer 123','Crystallizer 456','Crystallizer 789']}>
            <Stearine key={'Stearine'}/>
            <Chilled key={'Chilled Water'}/>
            {/* <ParameterSetting key={'Setting'}/> */}
            <Crystalizer134 key={'Crystallizer 123'}/>
            <Crsyalizer456 key={'Crystallizer 456'}/>
            <Crsyalizer789 key={'Crystallizer 789'}/>

        </HMIWrapper>
    </div>
  )
}

export default K4Card