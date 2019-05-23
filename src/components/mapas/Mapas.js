import React, {Component} from 'react';
import './mapas.css';


class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: "GkUohGm3fVKilW9qMHcb",
            app_code: "TXWMDz0kPxL0ZkRWCj-u5w",
            useHTTPS: true,
          
        }
    }

  

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.map.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    let myMarker = new window.H.map.Marker({lat:position.coords.latitude, lng:position.coords.longitude});
                    (this.map).addObject(myMarker);

                    //para colocar un radio en color azul un circulo.

                   // let stylePto = {fillColor: 'rgba(35, 51, 129, 0.3)',lineWidth: 5,strokeColor: 'rgba(114, 38, 51, 1)'};
                    // let circle = new window.H.map.Circle(
                    // new window.H.geo.Point(position.coords.latitude, position.coords.longitude),1000,{stylePto: stylePto} );
                    // circle.setData('Circle');
                    // let container = new window.H.map.Group({objects: [circle]});
                    this.map.addObject(container);

                },
                (error) => this.setState({
                    error: error.message
                })
            );
        }

        this.platform = new window.H.service.Platform(this.state);

        let layer = this.platform.createDefaultLayers();
        let container = document.getElementById('here-map');

        this.map = new window.H.Map(container, layer.normal.map, {
            center: {
                lat: this.props.lat,
                lng: this.props.lng, },
            zoom: this.props.zoom,
          })
        let events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        let behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
       let ui = new window.H.ui.UI.createDefault(this.map, layer)

        
    }    
  

    render() {
        return (
            <div id="here-map" className="map-style"/>
        );
    }
}

  export default Map;