import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkbox } from '../Utili/Utili';

function PublicRoute({component: Component, ...rest }) {
    return (
        
    console.log(checkbox()),
        <Route
            {...rest}
            render = {(props) => {
                return(
                    checkbox() ?
                    <Component {...props}/> :
                        <Redirect to="/auth"/>       
                )
            }}
        />
    );
}

export default PublicRoute;