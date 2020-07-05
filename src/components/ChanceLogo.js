import React from 'react'
import useSound from 'use-sound'
import heartSound from '../sounds/heartbeat.mp3'

const ChanceLogo = () => {

  const [play] = useSound(
    heartSound,
    { volume: 0.5 }
  )

  return (
    <i id="ChanceLogo" className="icon" onMouseEnter={() => play()} />
  );
}
export default ChanceLogo