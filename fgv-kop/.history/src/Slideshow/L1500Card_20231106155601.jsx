import React from 'react'
import HMIWrapper from './HMIWrapper'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import IceCondes from '../pages/L1500/IceCondes'
import Duo2 from '../pages/L1500/Duo2'
import Vacuum from '../pages/L1500/Vacuum'

const L1500Card = () => {
    return (
        <div>
            <HMIWrapper Tab={['Ice Codensation', 'Bleaching', 'Deodorization 1', 'Deodorization 2']}>
                <IceCondes key={'Ice Codensation'}/>
                <Bleaching key={'Bleaching'}/>
                <Duo1 key={'Deodorization 1'}/>
                <Duo2 key={'Deodorization 2'}/>
                <Vacuum key={'Vacuum'}/>
            </HMIWrapper>
        </div>
    )
}

export default L1500Card