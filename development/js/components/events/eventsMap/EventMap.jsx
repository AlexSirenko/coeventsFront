import React from 'react';
import PropTypes from 'prop-types';

import MapComponent from './MapComponent'

class EventMap extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<MapComponent   events={this.props.events}
                                userLocation={this.props.userLocation}
                                onEventClick={this.props.onEventClick}
                                containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                                mapElement={<div style={{ height: `100%` }} />}
        />)
    }
}

EventMap.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.object
    ),
    userLocation: PropTypes.object,
    onEventClick: PropTypes.func
};

export default EventMap