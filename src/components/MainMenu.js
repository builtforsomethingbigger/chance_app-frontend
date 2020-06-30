import React from 'react'
import { Link } from 'react-router-dom';

const MainMenu = (props) => {
    return(
        <div id="mainMenu" className="dropdownAnimation" onMouseLeave={props.onMouseLeave} style={{display: props.display ? 'block' : 'none' }}>
            <table width="100%" border="0" cellPadding="4" cellSpacing="0" >
                <tbody>
                    <tr height="40px" className="menuFont">
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">✅</span></td>
                        <td>SIGN IN</td>
                    </tr>
                    <tr height="40px" className="menuFont">
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">🏠</span></td>
                        <td><Link to='/' className="noUnderline">HOME SEARCH</Link></td>
                    </tr>                    
                    <tr height="40px" className="menuFont" onClick={props.userProfile}>
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">📊</span></td>
                        <td>MY PROFILE</td>
                    </tr>
                    <tr height="40px" className="menuFont">
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">❤️</span></td>
                        <td>MY CHARITIES</td>
                    </tr>
                    <tr height="40px" className="menuFont">
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">💬</span></td>
                        <td>MY MESSAGES</td>
                    </tr>
                    <tr height="40px" className="menuFont">
                        <td width="30px" className="mainMenuIcon padLeft40"><span role="img" aria-label="menuIcon">👋</span></td>
                        <td>SIGN OUT</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )    
}
export default MainMenu