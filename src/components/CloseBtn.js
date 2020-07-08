import React from 'react'
import useSound from 'use-sound'
import clickSound from '../sounds/click_5.mp3'

const CloseBtn = props => {
    const [click] = useSound(
        clickSound,
        { volume: 0.8 }
    )
    return (
        <div className="xClose" onClick={() => {props.clickHandler(); click()}}>x</div>
    )
}
export default CloseBtn