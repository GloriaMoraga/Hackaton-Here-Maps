import React, {Component} from 'react';
import Map from './components/mapas/Mapas.js';
import Header from './components/header/Header.js';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 52.530974,
            lng: 13.384944, // Null Island
            error: null,
        }
        
    }

    // When the component is rendered to the DOM for the first time
  // such as at page load we call the Geolocation API to determine
  // a latitude and longitude for the browser

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
           lat: position.coords.latitude,
            lng: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
}


    

    render() {
        return (
         
            <div className="App">
            <Header /> 
            <Map
                lat= { this.state.lat }
                lng= { this.state.lng }
                zoom="12"
                theme="normal.day"
            />)
            </div>
        );
    }
}

export default App;