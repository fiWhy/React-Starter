import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import Routes from './config/routes';

import {registerReducers, registerRoutes} from './config/bootstrap';

registerReducers();
registerRoutes();

import AppStore from './store';


ReactDOM.render(<Provider store={AppStore}>
                    <Router routes={Routes} history={hashHistory} />
                </Provider>, 
                document.getElementById('app'));