import React from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'

const L1000Card = () => {
    return (
        <div>
            <HMIWrapper Tab={[ 'Deodorising','Bleaching','Filtration','Vacuum']}>
                <Deodorising key={'Deodorising'}/>
                <Bleaching key={'Bleaching'}/>
                <Filtration key={'Filtration'}/>
                <Vacuum key={'Vacuum'}/>
            </HMIWrapper>
        </div>
    )
}

export default L1000Card