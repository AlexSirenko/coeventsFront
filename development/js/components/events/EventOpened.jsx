import React from 'react'
import PropTypes from 'prop-types'

class EventOpened extends React.Component {

    constructor(props) {
        super(props);
    }

    header = () => (
        <div>
            <img src={this.props.event.urlPhoto} />
        </div>
    )

    middleSection = () => {
        let event = this.props.event;

        return (
            <div>
                <h3>{event.header}</h3>
                <p>{event.creatorName}</p>
                <div>
                    <div>{event.date}</div>
                    <div>{event.timeScope.begin + ":00 - " + event.timeScope.end + ":00"}</div>
                    <div>{event.subscriptions.length}</div>
                </div>
            </div>
        )
    }

    footer = () => {
        let event = this.props.event;

        return (
            <div>
                <div>{event.location.latitude + ":" + event.location.longitude}</div>
                <div>{"adress from location or inputed by creator"}</div>
                <div>{event.description}</div>
            </div>
        )
    }

    renderEvent = () => {
        return (
            <div>
                {this.header()}
                {this.middleSection()}
                {this.footer()}
            </div>
        )

    }

    render() {
        return (
            <div className="eventOpened">
                {!this.props.event ? null : this.renderEvent()}
            </div>
        )
    }
}

EventOpened.propTypes = {
    event: PropTypes.object
};

export default EventOpened