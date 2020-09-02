import React from 'react'
import PropTypes from 'prop-types'

const Modal = (props) => {
    return (
        <div className="card">
            <button className="btn btn-primary">Close</button>
            {props.children}
        </div>
    )
}

Modal.propTypes = {

}

export default Modal;
