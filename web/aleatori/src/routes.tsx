import React from 'react';
import Login from './PathHttp/Login';
import Register from './PathHttp/Register';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './PathHttp/MainPage';
import Confirmation from './PathHttp/Confirmation'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/mainpage" exact component={MainPage}/>
                <Route path="/createAccount" exact component={Register}/>
                <Route path="/confirmation" exact component={Confirmation}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
