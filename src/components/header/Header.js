import React from 'react';
import './header.css';
import LogoHeader from '../../images/vecindap.png';


const Header = props => {

return(
     <header className='header'>
    <div className="logo-header">
        <img className='logo' src={LogoHeader} alt="logo"/>
    </div> 
    </header>

)


}

export default Header;