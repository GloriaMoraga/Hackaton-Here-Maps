import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

class HomePage extends Component{
    render(){
        return(
            
            <div className="home">
                <div className="homeBase">
                    <div className="img">
                        {/* <img src="https://images.vexels.com/media/users/3/128504/isolated/preview/46d6c89313e121865f3b493d9f5d6490-icono-de-rascacielos-de-bienes-ra--ces-by-vexels.png" style={{width: '50%'}}/> */}
                    </div>
                    <div className="titleHome">
                        <h1>VECINDAPP</h1>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default HomePage;