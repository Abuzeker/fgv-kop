import React from 'react'
import HMIWrapper from './HMIWrapper'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import IceCondes from '../pages/L1500/IceCondes'
import Duo2 from '../pages/L1500/Duo2'

const L1500Card = () => {
    return (
        <div>
            <HMIWrapper Tab={['Ice Condense', 'Bleaching', 'Deodorization 1', 'Deodorization 2']}>
                {/* <OiltekBF key={'Bleaching'} Parameter={RealTimeValue['PG1HMI']} />
                <OiltekDeo1 key={'Deodorization 1'} Parameter={RealTimeValue['PG2HMI']} />
                <OiltekDeo2 key={'Deodorization 2'} Parameter={RealTimeValue['PG2HMI']} />
                <OiltekFatty key={'FattyAcid'} Parameter={RealTimeValue['PG2HMI']} Expara={RealTimeValue['PG3HMI']} /> */}
                <IceCondes key={'IceCodensation'}/>
                <Bleaching key={'Bleaching'}/>
                <Duo1 key={'Deodorization 1'}/>
                <Duo2 key={'Deodorization 2'}/>

            </HMIWrapper>
        </div>
    )
}

export default L1500Card