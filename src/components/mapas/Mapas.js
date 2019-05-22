import React, {Component} from 'react';


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
    // changeTheme(theme, style) {
    //     let tiles = this.platform.getMapTileService({'type': 'base'});
    //     let layer = tiles.createTileLayer(
    //         'maptile',
    //         theme,
    //         256,
    //         'png',
    //         {'style': style}
    //     );
    //     this.map.setBaseLayer(layer);
    // }
    // shouldComponentUpdate(props, state) {
    //     this.changeTheme(props.theme, props.style);
    //     return false;
    // }

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '100vh', background: 'grey' }} />
        );
    }
}

  export default Map;