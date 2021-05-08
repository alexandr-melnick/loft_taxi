import React, {Component} from "react";
import mapboxgl from 'mapbox-gl';

export class Map extends Component {
  map=null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG1jbWlsbGVyIiwiYSI6ImNrb2c0NGpzejBmbjMzMG1hZmJ3NnI4cWoifQ.VBJ2eWHLQVrNYYOHDUPqqQ';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
      center: [38.9760300, 45.0448400],
      zoom: 10,
      attributionControl: false,
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
    <div className='map-wrapper'>
      <div data-testing='map' className='map' ref={this.mapContainer}></div>
    </div>
    )
  }
}
