import React, { Component } from 'react';
import firebase from '../../firebaseConfig.js';
import { Link } from 'react-router-dom';
import { Container, Col, Row} from 'react-bootstrap';
import './Create.css';
import LogoHeader from '../../images/vecindap.png';
import {storage} from '../../firebaseConfig.js';




class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
   
    this.state = {
      image: null,
      title: '',
      description: '',
      author: '',
      url: '',
      tipo:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
    
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
       
            this.setState({url });
           console.log(url)

    
        })
        
    });
    
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author , url, tipo} = this.state;
 
    this.ref.add({
      title,
      description,
      author,
      url, 
      tipo
    }).then((docRef) => {
      this.setState({
        
        title: '',
        description: '',
        author: '',
          tipo: '',
          url: ''
      });
      
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
  
  render() {
 
    return (
      <div className="back-comentarios">
   
       
             <Col className="back-logo" xs={12} md={12} lg={12} >
              <div className="logo-header">
              <Link to="/dashboard"><img className='logo' src={LogoHeader} alt="logo"/> </Link>
              </div>
              
            </Col>
            <Col className="box-titulo" xs={12} md={12} lg={12} >

              <h4 className="titulo-form">REPORTAR INCIDENCIA</h4>
            </Col>
            <Container>
          <Row>
            <Col xs={12} md={3} lg={3} ></Col>
          <Col xs={12} md={6} lg={6} >
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                 <label >Foto</label> 
              
                 <input className="form-control" type="file" 
                  onChange={this.handleChange} 
                  ref={(ref) => this.fileUpload = ref} />
                 
                 
              </div>
              <div className="form-group">
                <label >Titulo</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Titulo" />
              </div>
              <div className="form-group">
                <label >Descripción</label>
                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Descripción" cols="80" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label >
                  Tipo de Incidente
                </label>
                <select className="form-control" value={this.state.tipo}  onChange={this.onChange} id="exampleFormControlSelect1">
                  <option value ="<i className='fas fa-circle' style={{ color: 'green' }}></i>">Aceras y calzadas</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#FFAA00' }}></i>Alumbrado">Alumbrado</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#AA5DDB' }}></i>Mobiliario urbano">Mobiliario urbano</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#C74444' }}></i>Señales y semáforos">Señales y semáforos</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#B28B67' }}></i>Parques y jardines">Parques y jardines</option>
                </select>
              </div>
              <div className="form-group">
                <label >Vecin@:</label>
                <input type="text" className="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Nombre" />
              </div>


              <div className="form-group">
                <label >Ubicación</label>
                <input type="text" className="form-control" name="author" placeholder="ubicacion" />
              </div>
             <div className="btn-sucess">
               <button  onClick={this.handleUpload} type="submit" className="btn btn-primary">REPORTAR</button>
               </div> 
              <div className="volver"> <h6><Link to="/dashboard">Volver a Reportes</Link></h6> </div>

            </form>
            </Col>
            <Col xs={12} md={3} lg={3} ></Col>
          </Row>

          

        </Container>
  
      </div>
    );
  }
}

export default Create;