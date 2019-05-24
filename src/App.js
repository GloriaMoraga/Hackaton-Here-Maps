import React, { Component } from 'react';
import Map from './components/mapas/Mapas.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Firebase from './firebaseConfig';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 52.530974,
      lng: 13.384944, // Null Island
      error: null,
      user: {},
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
          lat= { this.state.lat }
          lng= { this.state.lng }
          zoom="15"
          theme="normal.day"
        />
      <Footer />
 
      </div>
    )

}  
    }


export default App;




