import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../actions'

const LogOut = ({ dispatch }) => {
    return (
       <button onClick={()=>dispatch(logOut())}>
           Log Out
       </button> 
    )
}

export default connect()(LogOut)