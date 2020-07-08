import React from 'react'
import { Link } from 'react-router-dom';
import useSound from 'use-sound'
import clickSound from '../sounds/click_5.mp3'
import scrollSound from '../sounds/click_6.mp3'


const MainMenu = (props) => {

    const [click] = useSound(
        clickSound,
        { volume: 0.8 }
    )
    const [scroll] = useSound(
        scrollSound,
        { volume: 0.8 }
    )

    const clearUser = () => {
        props.clearUser()
    }

    return(
        
        <div id="mainMenu" className="dropdownAnimation" onMouseLeave={props.onMouseLeave} style={{display: props.display ? 'block' : 'none' }}>
            <div style={{display: props.currentUser ? "none" : "block"}}>
            <Link to='/' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => click()} 
                    role="img" 
                    aria-label="menuIcon">✅&nbsp;&nbsp;&nbsp;&nbsp;SIGN IN
                </span>
            </Link>
            </div>
            <div style={{display: props.currentUser ? "block" : "none"}}>
            <Link to='/search' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => click()} 
                    role="img" 
                    aria-label="menuIcon">🏠&nbsp;&nbsp;&nbsp;&nbsp;HOME SEARCH
                </span>
            </Link>
            <Link to='/charities' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => click()} 
                    role="img" 
                    aria-label="menuIcon">📊&nbsp;&nbsp;&nbsp;&nbsp;MY CHARITIES
                </span>
            </Link>
            <Link to='/inbox' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => click()} 
                    role="img" 
                    aria-label="menuIcon">💬&nbsp;&nbsp;&nbsp;&nbsp;MY MESSAGES
                </span>
            </Link>
            <Link to='/profile' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => click()} 
                    role="img" 
                    aria-label="menuIcon">❤️&nbsp;&nbsp;&nbsp;&nbsp;MY PROFILE
                </span>
            </Link>
            <Link to='/' className="noUnderline">
                <span className="menuFont" 
                    onMouseEnter={() => scroll()} 
                    onClick={() => {{click(); clearUser();}}} 
                    role="img" 
                    aria-label="menuIcon">👋&nbsp;&nbsp;&nbsp;&nbsp;SIGN OUT
                </span>
            </Link>
            </div>
        </div>
    )    
}
export default MainMenu