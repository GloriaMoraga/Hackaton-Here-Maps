import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './loginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="loginPage">
                <div className="base">
                    <div className="divTitle">
                        <h1 className="title">TravelSafe Chile</h1>
                    </div>
                    <div className="divForm">
                        <form>
                            <input type="text" className="inputs" placeholder="Email" />
                            <input type="password" className="inputs" placeholder="Password" />
                            <div className="divBtn">
                            <Link to="/App"> <Button className="signIn">Sign In</Button></Link>
                            </div>
                        </form>
                        <div className="iconos">
                            <div className="frame-icon">
                                <i className='fab fa-google-plus-g' style={{ fontSize: '24px' }}></i>
                            </div>
                            <div className="frame-icon">
                                <i className='fab fa-facebook-f' style={{ fontSize: '24px', marginLeft: '6px' }}></i>
                            </div>
                            <div className="frame-icon">
                                <i className='fab fa-twitter' style={{ fontSize: '24px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;