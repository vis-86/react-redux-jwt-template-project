import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ loggedIn = false, component: Component, ...rest }) => {
    
    return (
        <Route {...rest} render={props => (
            loggedIn
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    );
} 