import React from 'react';
import Landing from './PathHttp/Landing';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;