import React from 'react';
import './header.css';
import LogoHeader from '../../images/vecindap.png';
import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';


const Header = props => {

    return (
        <header className='header'>
            <div className="logo-header">
                <Link to="/dashboard"><img className='logo' src={LogoHeader} alt="logo" /> </Link>
            </div>

            <div className="contenedor-botones">
                <Nav fill variant="tabs">
                    <Nav.Item>
                        <Nav.Link href="/dashboard">REPORTE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/app" eventKey="link-1">MAPA REPORTES</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <div><Link to="/dashboard"><Button variant="light"> REPORTES</Button> </Link></div>
            <div><Link to="/app"> <Button variant="light">MAPA REPORTES</Button> </Link></div> */}


            </div>

        </header>

    )


}

export default Header;