import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginComponent from '../login-component';
import LoggedComponent from '../logged-component';
import AuthComponent from '../../components/auth-component';
import {ApiContext} from '../../contexts/api-context';
import ApiService from '../../services/api-service';
import Header from '../header';

import './app.css';

const apiService = new ApiService();

function App() {
    return (
        <ApiContext.Provider value={apiService}>
            <div>
                <Header/>
                <Switch> 
                    <Route path='/main-page'>
                        <div>hello world</div>
                    </Route>
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
        </ApiContext.Provider>
    );
}

export default App;