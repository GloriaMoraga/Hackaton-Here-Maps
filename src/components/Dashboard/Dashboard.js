import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Firebase from '../../firebaseConfig.js';
import { Container, Col, Row, Card, Button} from 'react-bootstrap';
import testPrueba from '../../images/testimage2.png';
import btnuno from '../../images/botonuno.png';
import btndos from '../../images/botondos.png';
import Header from '../header/Header.js';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.ref = Firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (

 <div>
        <Header />
       
        <Container >  
         <Row>    
           <Col xs={12} md={12} lg={12} className="addWork">
           <div className="content-add-uno">
               <Link to="/create"><img src={btnuno} alt="btnuno"/>
               </Link>
           </div>
           
           <div className="content-add-dos">
               <Link to="/noseaun"><img src={btndos} alt="btndos"/>
               </Link>
           </div>
           
           </Col>
           
           
           
       

          <Col  xs={12} md={12} lg={12} className="tareas">
           {this.state.boards.map(board =>

           <div className="card-box">
           <Card className="card-box mt-2 mb-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={testPrueba} />
            <Card.Body>
               <Card.Title>{board.title}</Card.Title>
            <Card.Text>
            {board.description}
            <Link to={`/show/${board.key}`}>
             <span class="badge badge-primary badge-pill">{board.author}</span></Link> 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </div>
           )}
             
           
           </Col>





          </Row>
        </Container>



      </div>
    );
  }
}

export default Dashboard;