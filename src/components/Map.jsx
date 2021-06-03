import React, { PureComponent } from "react";
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { BookingFormConnected } from "./BookingForm";
import { getAddressList } from "../modules/actions"

class Map extends PureComponent {
  
  constructor(props) {
    super(props)
    this.state = { map: null }
  }
  
  mapContainer = React.createRef();

  geojson = (coords) => ({
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'properties': {},
          'coordinates': coords
        }
      }
    ]
});
  
  createRoute = () => {

    const { map } = this.state;
    map.addSource('LineString', {
      'type': 'geojson',
      'data': this.geojson(this.props.coords)
    });
    map.addLayer({
      'id': 'LineString',
      'type': 'line',
      'source': 'LineString',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#BF93E4',
        'line-width': 5
      }
    })
    var coordinates = this.geojson(this.props.coords).features[0].geometry.coordinates;
    var bounds = coordinates.reduce(function (bounds, coord) {
      return bounds.extend(coord);
    },
      new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
    map.fitBounds(bounds, {
      padding: 20
    });
  };

  componentDidMount () {
    mapboxgl.accessToken = process.env.REACT_APP_ACCESSMAP_TOKEN;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
      center: [38.9760300, 45.0448400],
      zoom: 10,
      attributionControl: false,
    })
    this.setState({ map })
    this.props.getAddressList();
  }

  componentDidUpdate() {
    const { coords } = this.props;
    if (coords?.length) {
      this.createRoute();
    }
  }

  componentWillUnmount() {
    const { map } = this.state;
    map.remove();
  }

  render() {
    const userCard = JSON.parse(localStorage.getItem('userCard'));

    return (
      <>
        {userCard?.cardNumber && <BookingFormConnected />}
        <div className='map-wrapper'>
          <div data-testing='map' className='map' ref={this.mapContainer} />
        </div>
      </>)
  }
}

export const MapConnected = connect((state) => ({ addresses: state.addressesList.addresses, coords: state.route.coords }), { getAddressList })(Map);
