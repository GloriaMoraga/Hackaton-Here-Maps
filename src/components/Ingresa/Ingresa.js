import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Col, Row} from 'react-bootstrap';
import './ingresa.css';
import LogoHeader from '../../images/vecindap.png';





class Ingresa extends Component {

  
  
  render() {
 
    return (
      <div className="back-comentarios">
   
        <Container>
          <Row>
             <Col className="back-logo" xs={12} md={12} lg={12} >
              <div className="logo-header">
              <Link to="/dashboard"><img className='logo' src={LogoHeader} alt="logo"/> </Link>
              </div>
              
            </Col>
            <Col className="box-titulo-ingresa" xs={12} md={12} lg={12} >

              <h4 className="titulo-form-ingresa">REPORTAR INCIDENCIA</h4>
            </Col>
            
        
          <Col xs={12} md={12} lg={12} >
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                 <label >Foto</label> 
              
                 <input className="form-control" type="file" 
                  onChange={this.handleChange} 
                  ref={(ref) => this.fileUpload = ref} />
                 
                 
              </div>
              <div className="form-group">
                <label >Titulo</label>
                <input type="text" className="form-control" name="title"  onChange={this.onChange} placeholder="Titulo" />
              </div>
              <div className="form-group">
                <label >Descripción</label>
                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Descripción" cols="80" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label >
                  Tipo de Incidente
                </label>
                <select className="form-control"   onChange={this.onChange} id="exampleFormControlSelect1">
                  <option value ="<i className='fas fa-circle' style={{ color: 'green' }}></i>">Aceras y calzadas</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#FFAA00' }}></i>Alumbrado">Alumbrado</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#AA5DDB' }}></i>Mobiliario urbano">Mobiliario urbano</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#C74444' }}></i>Señales y semáforos">Señales y semáforos</option>
                  <option value="<i className='fas fa-circle' style={{ color: '#B28B67' }}></i>Parques y jardines">Parques y jardines</option>
                </select>
              </div>
              <div className="form-group">
                <label >Vecin@:</label>
                <input type="text" className="form-control" name="author"  onChange={this.onChange} placeholder="Nombre" />
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
          </Row>

          

        </Container>
  
      </div>
    );
  }
}

export default Ingresa;