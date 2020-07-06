import React from 'react'
import useSound from 'use-sound'
import heartSound from '../sounds/heartbeat.mp3'
import clickSound from '../sounds/click_5.mp3'

const ChanceLogo = () => {

  const [play] = useSound(
    heartSound,
    { volume: 0.25 }
  )
  const [click] = useSound(
    clickSound,
    { volume: 0.8 }
  )

  return (
    <i id="ChanceLogo" className="icon" onMouseEnter={() => play()} onClick={() => click()} />
  );
}
export default ChanceLogo