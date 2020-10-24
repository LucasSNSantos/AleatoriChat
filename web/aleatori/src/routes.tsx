import React from 'react';
import Landing from './PathHttp/Landing';
<<<<<<< Updated upstream
=======
import Login from './PathHttp/Login'
>>>>>>> Stashed changes
import { BrowserRouter, Switch , Route } from 'react-router-dom';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
<<<<<<< Updated upstream
=======
                <Route path="/login" exact component={Login} />
>>>>>>> Stashed changes
            </Switch>
        </BrowserRouter>
    );
}

<<<<<<< Updated upstream
export default Routes;
=======
export default Routes;
>>>>>>> Stashed changes
