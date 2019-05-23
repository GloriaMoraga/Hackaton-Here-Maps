import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './loginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="loginPage">
                <div className="base">
                    <div className="logo">
                        <img src="https://github.com/Milexys/Hackaton-Here-Maps/blob/master/images/Group.png?raw=true" alt="logo vecinapp"/>
                    </div>
                    <div className="divTitle">
                        <h1>Hola</h1>
                        <p>Crea tu cuenta para comenzar. Luego puedes participar de tu comunidad</p>
                    </div>
                    <div className="divForm">
                        <form>
                            <label>EMAIL</label>
                            <input type="text" placeholder="Email" />
                            <label>CONTRASEÑA</label>
                            <input type="password"  placeholder="****" />
                            <div className="divBtn">

                            <Link to="/App"> <Button className="signIn">INGRESA</Button></Link>
                            </div>
                        </form>
                    </div>
                    <div className="linkRegister">
                    <p>¿No tienes una cuenta? <Link to='/register'style={{color:'rgb(25, 82, 180)'}}> Registrate</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;