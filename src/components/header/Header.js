import React from 'react';
import './header.css';
import LogoHeader from '../../images/vecindap.png';
import { Link } from 'react-router-dom';
import {  Button} from 'react-bootstrap';


const Header = props => {

return(
    <header className='header'>
         <div className="logo-header">
          <Link to="/dashboard"><img className='logo' src={LogoHeader} alt="logo"/> </Link>
         </div> 

        <div className="contenedor-botones"> 
            <div><Link to="/dashboard"><Button variant="light"> REPORTES</Button> </Link></div>
            <div><Link to="/app"> <Button variant="light">MAPA REPORTES</Button> </Link></div>


        </div>
    
    </header>

)


}

export default Header;