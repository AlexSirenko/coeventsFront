import React from 'react'
import { connect } from 'react-redux'

import { addEventBtnClicked } from '../../actions/index'

import AddEventBtn from '../../components/events/AddEventBtn'

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(addEventBtnClicked())
    }
}

const AddEventBtnContainer = connect(
    null,
    mapDispatchToProps
)(AddEventBtn)

export default AddEventBtnContainer