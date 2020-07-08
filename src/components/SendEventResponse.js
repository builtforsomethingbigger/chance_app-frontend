import React from 'react'
import useSound from 'use-sound'
import sentSound from '../sounds/sent.mp3'

const SendEventResponse = props => {
    const [click] = useSound(
        sentSound,
        { volume: 0.8 }
    )
    return (
        <button type="submit" className="respondBtn" onClick={() => {props.clickHandler(); click()}}>SEND</button>
        )
}
export default SendEventResponse