import React, {Component} from 'react';
import './mapStyle.scss';
import mapboxgl from 'mapbox-gl';
import {data} from "../../jsons/states";

mapboxgl.accessToken = 'pk.eyJ1IjoidmlqYXlzYWRodSIsImEiOiJja2Rsb2Q2cGIwdjYxMzBsNGo3MjJxaTBjIn0.DwbB08ZAA5E1p9OABViN8g';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -90.4433,
      lat: 48.10,
      zoom: 2.5
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      if (map.getCenter().lng && map.getCenter().lat)
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
    });


    //  *********************************************
    let hoveredStateId = null;

    map.on('load', function () {
      map.addSource('states', {
        'type': 'geojson',
        'data': data
      });

      map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': 'states',
        'layout': {},
        'paint': {
          'fill-color': '#627BC1',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0.5
          ]
        }
      });

      map.addLayer({
        'id': 'state-borders',
        'type': 'line',
        'source': 'states',
        'layout': {},
        'paint': {
          'line-color': '#627BC1',
          'line-width': 2
        }
      });

      map.on('mousemove', 'state-fills', function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              {source: 'states', id: hoveredStateId},
              {hover: false}
            );
            map.getCanvas().style.cursor = 'pointer';
            let coordinates = e.features[0].geometry.coordinates[0][0];
            let description = "<p>" + "<span class='font-weight-bold'>GEO_ID: </span>" + "<span>" + (e.features[0].properties.GEO_ID || '') + "</span>" + "</p>"
              + "<p>" + "<span class='font-weight-bold'>State: </span>" + "<span>" + (e.features[0].properties.NAME || '') + "</span>" + "</p>"
              + "<p>" + "<span class='font-weight-bold'>CENSUSAREA: </span>" + "<span>" + (e.features[0].properties.CENSUSAREA || '') + "</span>" + "</p>";
            if (coordinates) {
              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }
              popup
                .setLngLat(typeof coordinates[0] === 'object' ? coordinates[0] : coordinates)
                .setHTML(description)
                .addTo(map);

            }

          }
          hoveredStateId = parseInt(e.features[0].properties.STATE);
          map.setFeatureState(
            {source: 'states', id: hoveredStateId},
            {hover: true}
          );
        }

      });
      map.on('mouseleave', 'state-fills', function () {
        if (hoveredStateId) {
          map.setFeatureState(
            {source: 'states', id: hoveredStateId},
            {hover: false}
          );
          map.getCanvas().style.cursor = '';
          popup.remove();
        }
        hoveredStateId = null;

      });

      let popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
    });
  }

  render() {

    return (
      <div ref={el => this.mapContainer = el} className="mapContainer"/>
    );
  }
}

export default MapComponent;
