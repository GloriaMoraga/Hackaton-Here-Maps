import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import iconwhite from '../../images/logowhite.png';

class HomePage extends Component{
    render(){
        return(
          
            <div className="home">
                <div className="homeBase">
                    <div className="img-logo-first">
                        <img src={iconwhite} alt="logohomepage"/>
                    </div>
                    <div className="titleHome">
                    <Link to='/login'>
                        <h1>VECINDAP</h1>
                    </Link>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default HomePage;