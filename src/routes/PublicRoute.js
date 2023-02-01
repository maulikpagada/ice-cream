import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkbox } from '../Utili/Utili';

function PublicRoute({component: Component, restricted=false, ...rest }) {
    return (
        <Route
            {...rest}
            render = {(props) => {
                return(
                    checkbox() && restricted ?
                        <Redirect to="/"/> :
                        <Component {...props}/>
                )
            }}
        />
    );
}

export default PublicRoute;