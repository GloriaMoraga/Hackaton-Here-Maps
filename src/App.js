import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import Map from './components/mapas/Mapas.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Firebase from './firebaseConfig';
import Dashboard from './components/Dashboard/Dashboard';



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

        <Map
        lat={this.state.lat}
        lng={this.state.lng}
        zoom='12'
        />
      </div>
    );
  }   
    }


export default App;




// render() {
//   return (
   
//       <div className="App">
//       <Header /> 
//         <Map
//           lat= { this.state.lat }
//           lng= { this.state.lng }
//           zoom="15"
//           theme="normal.day"
//         />
//       <Footer />
  

//       </div>
//     )

// }