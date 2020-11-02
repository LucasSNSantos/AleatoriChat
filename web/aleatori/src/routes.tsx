import React from 'react';
import Landing from './PathHttp/Landing';
import Login from './PathHttp/Login';
import Register from './PathHttp/Register';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './PathHttp/MainPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/MainPage" exact component={MainPage}/>
                <Route path="/createAccount" exact component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
