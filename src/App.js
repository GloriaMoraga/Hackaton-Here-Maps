import React, { Component } from 'react';
import Map from './components/mapas/Mapas.js';
import Firebase from './firebaseConfig';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app_id: "GkUohGm3fVKilW9qMHcb",
      app_code: "TXWMDz0kPxL0ZkRWCj-u5w",
      lat: -33.453154, 
      lng: -70.667730,
      error: null,
      user: {},
    }

  }
  componentDidMount(){
    if (navigator.geolocation) {
     let ref = navigator.geolocation.getCurrentPosition(
          (position) => {
              this.setState({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              });
          },
          (error) => this.setState({
              error: error.message
          })
      );
      this.setState({ watchId: ref })
  }

  }
  authListener(){
    Firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ user });
        console.log(user)
      } else {
        this.setState({ user:null });
      }
    });
   }

  render() {
    return (
      <div className="App">
        <Header />
        <Map
        app_id={this.state.app_id}
        app_code={this.state.app_code}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom='12'
        theme="normal.day"
        />
        <Footer />
      </div>
    );
  }   
    }


export default App;
