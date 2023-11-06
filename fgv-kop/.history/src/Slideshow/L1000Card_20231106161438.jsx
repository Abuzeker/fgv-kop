import React from 'react'
import HMIWrapper from './HMIWrapper'
import Deodorising from '../HMI/L1000/Deodorising'

const L1000Card = () => {
    return (
        <div>
            <HMIWrapper Tab={[ 'Deodorising']}>
                <Deodorising key={'Deodorising'}/>
            </HMIWrapper>
        </div>
    )
}

export default L1000Card