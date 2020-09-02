import React from 'react'

export const ErrorMessage = (props) => {
    const {css = ""} = props;
    return (
        <small className={["d-block text-danger my-2 shadow",css].join(" ").trim()}>
            {props.children}
        </small>
    )
}
