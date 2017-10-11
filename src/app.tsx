import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/app";

import {registerReducers, registerRoutes} from './config/bootstrap';
registerReducers();
registerRoutes();

import Router from './config/routes';

import AppStore from './store';

ReactDOM.render(<Provider store={AppStore}>
                    <App>
                        {Router}
                    </App>
                </Provider>, 
                document.getElementById('app'));