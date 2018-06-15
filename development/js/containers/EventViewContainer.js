import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getEventsNearMe, eventOpenedId } from '../actions/index'

import EventView from '../components/events/EventView'

//there will be filtering
const mapStateToProps = state => {
    return {
        eventsNearMe: state.eventsNearMe,
        userAndToken: state.userAndToken,
        userLocation: state.userLocation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestEventsNearMe: metadata => {
            dispatch(getEventsNearMe(metadata))
        },
        onEventClick: id => {
            dispatch(eventOpenedId(id))
        }
    }
}

const EventViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventView)

export default EventViewContainer