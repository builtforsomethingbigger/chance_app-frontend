import React from 'react'
import { Link } from 'react-router-dom';

const MainMenu = (props) => {
    return(
        <div id="mainMenu" className="dropdownAnimation" onMouseLeave={props.onMouseLeave} style={{display: props.display ? 'block' : 'none' }}>
            <Link to='/' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">✅&nbsp;&nbsp;&nbsp;&nbsp;SIGN IN</span>
            </Link>
            <Link to='/search' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">🏠&nbsp;&nbsp;&nbsp;&nbsp;HOME SEARCH</span>
            </Link>
            <Link to='/profile' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">📊&nbsp;&nbsp;&nbsp;&nbsp;MY PROFILE</span>
            </Link>
            <Link to='/charities' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">❤️&nbsp;&nbsp;&nbsp;&nbsp;MY CHARITIES</span>
            </Link>
            <Link to='/inbox' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">💬&nbsp;&nbsp;&nbsp;&nbsp;MY MESSAGES</span>
            </Link>
            <Link to='/goodbye' className="noUnderline">
                <span className="menuFont" role="img" aria-label="menuIcon">👋&nbsp;&nbsp;&nbsp;&nbsp;SIGN OUT</span>
            </Link>
        </div>
    )    
}
export default MainMenu