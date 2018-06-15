import React from 'react'
import { connect } from 'react-redux'

import EventOpened from '../components/events/EventOpened'

//there will be filtering
const mapStateToProps = state => {

    let id = state.eventOpenedId;

    return {
        event: !state.eventsNearMe ?  null : state.eventsNearMe.filter((item)=>item._id == id)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const EventOpenedContainer = connect(
    mapStateToProps,
    null
)(EventOpened)

export default EventOpenedContainer