import React from 'react';
import PropTypes from 'prop-types';

import EventListItem from './EventListItem'

class EventList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let events = !!this.props.events ? (this.props.events.map((item, idx) =>
            <EventListItem key={idx} event={item} onEventClick={this.props.onEventClick}/>
        )) : null;

        return (
            <div className="eventList">
                {events}
            </div>
        )
    }
}

EventList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.object
    ),
    onEventClick: PropTypes.func
};

export default EventList