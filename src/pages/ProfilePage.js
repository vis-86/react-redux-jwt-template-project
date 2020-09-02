import React from 'react'
import { userActions } from '../_actions'
import { connect } from 'react-redux'

const ProfilePage = ({logout}) => {
    return (
        <div>
            <h1 className="text-white">
                ProfilePage
                <button className="ml-2 btn btn-sm btn-danger" onClick={(e)=>logout()}>Logout</button>
            </h1>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userActions.logout()),
  }
}
const connectedProfilePage = connect(null, mapDispatchToProps)(ProfilePage);

export {connectedProfilePage as ProfilePage}