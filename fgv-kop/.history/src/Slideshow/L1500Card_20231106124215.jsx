import React from 'react'
import HMIWrapper from './HMIWrapper'
import IceCondes from '../HMI/L1500/IceCondes'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import Deodorising from '../HMI/L1000/Deodorising'

const L1500Card = () => {
    return (
        <div>
            <HMIWrapper Tab={['Ice Condense', 'Bleaching', 'Deodorization 1', 'Deodorising']}>
                {/* <OiltekBF key={'Bleaching'} Parameter={RealTimeValue['PG1HMI']} />
                <OiltekDeo1 key={'Deodorization 1'} Parameter={RealTimeValue['PG2HMI']} />
                <OiltekDeo2 key={'Deodorization 2'} Parameter={RealTimeValue['PG2HMI']} />
                <OiltekFatty key={'FattyAcid'} Parameter={RealTimeValue['PG2HMI']} Expara={RealTimeValue['PG3HMI']} /> */}

                {/* <IceCondes key={'Ice Condense'}/>
                <Bleaching key={'Bleaching'}/>
                <Duo1 key={'Deodorization 1'}/> */}
                <Deodorising key={'Deodorising'}/>
            </HMIWrapper>
        </div>
    )
}

export default L1500Card