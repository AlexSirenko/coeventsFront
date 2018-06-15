import React from 'react';
import PropTypes from 'prop-types';

class EventListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    header = () => (
        <div>
            <img src={this.props.event.urlPhoto} />
        </div>
    )

    mainSection = () => {
        let event = this.props.event;

        return (
            <div>
                <h3>{event.header}</h3>
                <p>{event.creatorName}</p>
            </div>
        )
    }

    footer = () => {
        let event = this.props.event;

        return (
            <div>
                <div>{event.date}</div>
                <div>{event.timeScope.begin+ ":00 - "+ event.timeScope.end + ":00"}</div>
                <div>{event.subscriptions.length}</div>
            </div>
        )
    }


    render() {
        const event = this.props.event;
        
        return (
            <div onClick={()=> this.props.onEventClick(event._id)}>
                {this.header()}
                {this.mainSection()}
                {this.footer()}
            </div>
        )
    }
}

EventListItem.propTypes = {
    event: PropTypes.object.isRequired,
    onEventClick: PropTypes.func
};

export default EventListItem