import React from 'react'
import { connect } from 'react-redux'

import { fetchAddEvent } from '../../actions/index'

import AddEventBtn from '../../components/events/AddEventBtn'

const mapDispatchToProps = dispatch => {
    return {
        onAddEvent: event => dispatch(fetchAddEvent(event))
    }
}

const AddEventBtnContainer = connect(
    null,
    mapDispatchToProps
)(AddEventBtn)

export default AddEventBtnContainer