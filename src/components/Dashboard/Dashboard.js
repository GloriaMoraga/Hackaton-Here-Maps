import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Firebase from '../../firebaseConfig.js';
import { Container, Col, Row, Card} from 'react-bootstrap';
import btnuno from '../../images/botonuno.png';
import pin from '../../images/location.png';
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
      const { title, description, author, url ,tipo} = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        url,
        tipo
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
            <Col xs={12} sm={2} lg={3}></Col>
            <Col xs={12} sm={8} lg={6} className="addWork">
              <div className="content-add-uno">
                <Link to="/create"><img src={btnuno} alt="btnuno" />
                </Link>
              </div>

              <div className="content-add-dos">
                <Link to="/ingresar"><img src={btndos} alt="btndos" />
                </Link>
              </div>

            </Col>
            <Col xs={12} sm={2} lg={3}></Col>
            </Row>



            <Row>
            <Col xs={12} sm={2} lg={3}></Col>
            <Col xs={12} sm={8} lg={6} className="tareas">
              {this.state.boards.map((board, i) =>

                <div key={i} className="card-box">
                  <Card className="card-box mt-2 mb-3" style={{ width: '100%' }}>
                  <Link to={`/show/${board.key}`}>
                          <span className="badge badge-success ml-1 mt-1">{board.title}</span></Link>
                    <Card.Img variant="top"src={board.url}  />
                    <Card.Body>
                      <Card.Title>{board.description}</Card.Title>
                      <Card.Text className="autor-class">
                        <p>Usuario: {board.author}</p> <img className="pin" src={pin} alt="location"/>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}


            </Col>
            <Col xs={12} sm={2} lg={3}></Col>





          </Row>
        </Container>



      </div>
    );
  }
}

export default Dashboard;