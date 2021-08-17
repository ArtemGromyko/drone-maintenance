import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginComponent from '../login-component';
import LoggedComponent from '../logged-component';
import AuthComponent from '../../components/auth-component';

import './app.css';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <LoginComponent/>
                </Route>
                <Route path='/home'>
                    <AuthComponent>
                        <LoggedComponent/>
                    </AuthComponent>
                </Route>
            </Switch>
        </div>
    );
}

export default App;