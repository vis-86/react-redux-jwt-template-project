import React from 'react'
import "./AlertMessage.css";

const AlertMessage = props => {
    const {type = "info"} = props;
    return (<div className={"gil-alert alert alert-dismissible fade show alert-" + type} role="alert">
    {props.children}
  </div>);
}

export {AlertMessage};