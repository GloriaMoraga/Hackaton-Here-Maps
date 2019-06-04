import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Firebase from '../../firebaseConfig'
import { Link } from 'react-router-dom';
import './loginPage.css';
import iconblue from '../../images/logoblue.png';
import { Container, Col, Row} from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            user: {},
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
            <Container>
                <Row>
                <Col xs={12} sm={2} lg={2}></Col>
                <Col xs={12} sm={8} lg={8}>
                 <div className="loginPage">
                <div className="base">
                    <div className="logo-login">
                        <img src={iconblue} alt="logo vecinapp"/>
                    </div>
                    <div className="divTitle">
                        <h1>Hola</h1>
                        <p>Crea tu cuenta para comenzar. <br/>Luego puedes participar de tu comunidad</p>
                    </div>
                    <div className="divForm">
                        <form onChange={this.handleChange}>
                            <label>EMAIL</label>
                            <input type="text" id="email" placeholder="Email" />
                            <label>CONTRASEÑA</label>
                            <input type="password" id="password" placeholder="****" />
                            <div className="divBtn">
                               <Link to='/dashboard'> <Button type="submit"  className="signIn">INGRESA</Button></Link>
                            </div>
                        </form>
                    </div>
                    <div className="linkRegister">
                    <p>¿No tienes una cuenta? <Link to='/register'style={{color:'rgb(25, 82, 180)'}}> Registrate</Link></p>
                    </div>
                </div>
            </div>
               </Col>
              <Col xs={12} sm={2} lg={2}></Col>
            </Row>
            </Container>
        )
    }
}

export default LoginPage;