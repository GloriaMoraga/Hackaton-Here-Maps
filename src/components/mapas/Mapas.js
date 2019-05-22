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
            // theme: props.theme,
            // style: props.style,
        }
    }

    // TODO: Add theme selection discussed later HERE

    componentDidUpdate() {
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