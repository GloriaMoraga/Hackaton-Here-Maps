import React, { Component } from 'react';
import firebase from '../../firebaseConfig.js';
import { Link } from 'react-router-dom';
import { Container, Col, Row} from 'react-bootstrap';
import './Create.css';
import LogoHeader from '../../images/vecindap.png';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: '',
      url: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author , url} = this.state;

    this.ref.add({
      title,
      description,
      author,
      url
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: '',
        url : ''
      });
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author, url } = this.state;
    return (
      <div>
   
        <Container>
          <Row>
             <Col className="mt-2" xs={12} md={12} lg={12} >
              <div className="logo-header">
              <Link to="/dashboard"><img className='logo' src={LogoHeader} alt="logo"/> </Link>
              </div>
              
            </Col>
            <Col className="box-titulo" xs={12} md={12} lg={12} >

              <h4 className="titulo-form">REPORTAR INCIDENCIA</h4>
            </Col>
            
        
          <Col xs={12} md={12} lg={12} >
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                 <label for="title">Foto</label>  
                 <input className="form-control" type="file" value={url} onChange={this.handleChange}/>
                 <button onClick={this.handleUpload}>Upload</button>
              </div>
              <div className="form-group">
                <label for="title">Titulo</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="description">Descripción</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div className="form-group">
                <label for="author">Vecin@:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>

              <div className="form-group">
                <label for="author">Ubicación</label>
                <input type="text" className="form-control" name="author" placeholder="Author" />
              </div>
             <div className="form-group"><button type="submit" className="btn btn-success">REPORTAR</button></div> 
            </form>
            </Col>
          </Row>

          <h4><Link to="/dashboard" className="btn btn-primary">Volver a Reportes</Link></h4>

        </Container>
  
      </div>
    );
  }
}

export default Create;