import React from 'react';
import PropTypes from 'prop-types';

import EventList from './eventsList/EventList';
import EventMap from './eventsMap/EventMap';
import EventOpenedContainer from "../../containers/EventOpenedContainer";

class EventView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMapOpened: true,
            navigatorError: false
        }
    }

    componentWillMount() {
        this.getEventByLocation();
    }

    getEventByLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let metadata = {
                    scope: 1330,
                    location: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    userAndToken: this.props.userAndToken
                }
                this.props.requestEventsNearMe(metadata);
            });
        } else {
            this.setState({
                navigatorError: true
            })
        }
    }

    render() {
        let visionElement = this.state.isMapOpened ?
            <EventMap events={this.props.eventsNearMe} onEventClick={this.props.onEventClick} userLocation={this.props.userLocation}/>
            :
            <EventList events={this.props.eventsNearMe}  onEventClick={this.props.onEventClick} />

        return (
            <div className="d-flex">
                {visionElement}
                <EventOpenedContainer />
            </div>
        )
    }
}

EventView.propTypes = {
    requestEventsNearMe: PropTypes.func,
    eventsNearMe: PropTypes.arrayOf(
        PropTypes.object
    ),
    userAndToken: PropTypes.object,
    userLocation: PropTypes.object,
    onEventClick: PropTypes.func
};

export default EventView