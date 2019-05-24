import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Firebase from '../../firebaseConfig.js';
import { Container, Col, Row, Card} from 'react-bootstrap';
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
      const { title, description, author, url } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        url
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
                <Link to="/create"><img src={btnuno} alt="btnuno" />
                </Link>
              </div>

              <div className="content-add-dos">
                <Link to="/noseaun"><img src={btndos} alt="btndos" />
                </Link>
              </div>

            </Col>





            <Col xs={12} md={12} lg={12} className="tareas">
              {this.state.boards.map((board, i) =>

                <div key={i} className="card-box">
                  <Card className="card-box mt-2 mb-3" style={{ width: '100%' }}>
                  <Link to={`/show/${board.key}`}>
                          <span className="badge badge-primary badge-pill ml-4 mt-3">{board.title}</span></Link>
                    <Card.Img variant="top"src={board.url}  />
                    <Card.Body>
                      <Card.Title>{board.description}</Card.Title>
                      <Card.Text>
                        Usuario: {board.author}
                      </Card.Text>
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