import React, { Component } from 'react';
import { data } from '../JSON/data.json'
import './mapas.css';


class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: this.props.app_id,
            app_code: this.props.app_code,
            useHTTPS: true,
            ui: null,
            data
        }
        this.markers = [];
        this.currentPosition = false;
    }

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        let layer = this.platform.createDefaultLayers();
        let container = document.getElementById('here-map');

        this.map = new window.H.Map(container, layer.normal.map, {
            center: {
                lat: this.props.lat,
                lng: this.props.lng,
            },
            zoom: this.props.zoom,
        })
        let events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        let behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        let ui = new window.H.ui.UI.createDefault(this.map, layer)
        this.setState({ ui: ui });

        if (this.currentPosition) {
            console.log(this.currentPosition)
            this.map.removeObjects([this.currentPosition])
        }
        this.currentPosition = new window.H.map.Marker({
            lat: this.props.lat,
            lng: this.props.lng
        })
        this.map.addObjects([this.currentPosition])
        this.showMarkerData();
    }

    componentDidUpdate() {
        if (this.currentPosition) {
            this.map.removeObjects([this.currentPosition])
            this.currentPosition = new window.H.map.Marker({
                lat: this.props.lat,
                lng: this.props.lng
            })
            this.map.addObjects([this.currentPosition])
            this.map.setCenter({ lat: this.props.lat, lng: this.props.lng });
        }
    }

    showMarkerData(){
        this.state.data.forEach(element => {
            let icon = new window.H.map.Icon('http://www.stickpng.com/assets/images/58afdad6829958a978a4a693.png', { size: new window.H.math.Size(20, 28) }, { anchor: new window.H.math.Point(8, 28) });
            let marker = new window.H.map.Marker({ lat: element.Latitud, lng: element.Longitud }, { icon: icon })
            this.map.addObject(marker);
            marker.addEventListener("tap", (evt) => {
                let info = new window.H.ui.InfoBubble(evt.target.getPosition(), {
                    content: `<h5>${element.Usuario}</h5>
                            <h6>${element.Reporte}</h6>`
                })
                this.state.ui.addBubble(info);
            }, false)
        
        });
    }

    render() {
        return (
            <div id="here-map" className="map-style" />
        );
    }
}

export default Map;