import React from 'react'
import PropTypes from 'prop-types'

class AddEventBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Add Event</p>
            </div>
        )
    }
}

AddEventBtn.propTypes = {
    onClick: PropTypes.func
};

export default AddEventBtn 