import React from 'react'
import PropTypes from 'prop-types'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withGoogleMap((props) => {

  const markerEvents = !props.events ? null : props.events.map((item) =>
    <Marker key={item._id}
      position={{ lat: item.location.latitude, lng: item.location.longitude }}
      onClick={() => props.onEventClick(item._id)}
    />)

  const location = !props.userLocation ? { lat: -34.397, lng: 150.644 } : { lat: props.userLocation.latitude, lng: props.userLocation.longitude };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={location}
      center={location}
    >
      {markerEvents}
    </GoogleMap>)
})

MapComponent.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.object
  ),
  userLocation: PropTypes.object,
  handleEventClick: PropTypes.func
}

export default MapComponent