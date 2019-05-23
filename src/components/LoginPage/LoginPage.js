import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Firebase from '../../firebaseConfig'
import { Link } from 'react-router-dom';
import './loginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange(e) {
        this.setState({ 
            [e.target.id]: e.target.value
        });
    }
    handleLogin(e){
        e.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
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
                    <div className="logo">
                        <img src="https://github.com/Milexys/Hackaton-Here-Maps/blob/master/images/Group.png?raw=true" alt="logo vecinapp"/>
                    </div>
                    <div className="divTitle">
                        <h1>Hola</h1>
                        <p>Crea tu cuenta para comenzar. Luego puedes participar de tu comunidad</p>
                    </div>
                    <div className="divForm">
                        <form onChange={this.handleChange}>
                            <label>EMAIL</label>
                            <input type="text" id="email" placeholder="Email" />
                            <label>CONTRASEÑA</label>
                            <input type="password" id="password" placeholder="****" />
                            <div className="divBtn">
                                <Button type="submit" onClick={this.handleLogin} className="signIn">INGRESA</Button>
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