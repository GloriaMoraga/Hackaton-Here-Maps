import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Firebase from '../../firebaseConfig'
import { Link } from 'react-router-dom';
import './register.css';
import iconblue from '../../images/logoblue.png';

class RegisterPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            user: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(e) {
        this.setState({ 
            [e.target.id]: e.target.value
        });
    }

    handleRegister(e){
        e.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) =>{
            console.log(user)
        })
        .catch((error) =>{
            console.log(error);
         });
    }  

    render() {
        return (
            <div className="loginPage">
                <div className="base">
                    <div className="logo-login">
                        <img src={iconblue} alt="logo vecinapp"/>
                    </div>
                    <div className="divTitle">
                        <h1>Registrate!</h1>
                    </div>
                    <div className="divForm">
                        <form onChange={this.handleChange}>
                            <label>EMAIL</label>
                            <input type="text" id="email" placeholder="Ingresa tu Email" />
                            <label>CONTRASEÑA</label>
                            <input type="password" id="password" placeholder="Ingresa una contraseña" />
                            <label>CONFIRMAR CONTRASEÑA</label>
                            <input type="password" id="password" placeholder="Confirmar contraseña" />
                            <div className="divBtn">
                               <Link to='/dashboard'> <Button type="submit"  className="signIn">REGISTRAR</Button></Link>
                            </div>
                        </form>
                    </div>
                    <div className="linkRegister">
                    <Link to='/login'style={{color:'gray', textDecoration: 'none'}}> VOLVER</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage;