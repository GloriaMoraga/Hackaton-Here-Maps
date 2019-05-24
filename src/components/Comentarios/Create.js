import React, { Component } from 'react';
import firebase from '../../firebaseConfig.js';
import { Link } from 'react-router-dom';
import { Container, Col, Row} from 'react-bootstrap';
import './Create.css';
import Footer from '../footer/Footer';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div>
        <Container>
          <Row>
              <Col xs={12} md={12} lg={12} >
              <h3 className="text-center mt-2">
              Crea una Tarea
            </h3>
            </Col>
            
        
          <Col xs={12} md={12} lg={12} >
            
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
            </Col>
          </Row>

          <h4><Link to="/dashboard" className="btn btn-primary">Volver a Reportes</Link></h4>

        </Container>
        <Footer />
      </div>
    );
  }
}

export default Create;