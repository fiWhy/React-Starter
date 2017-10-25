import { ReducerCombiner } from '../utils/reducer/reducer.combiner';
import { createStore, applyMiddleware } from 'redux';
import { async } from '../middlewares/async.middleware';
import { logger } from '../middlewares/logger.middleware';
import thunk from 'redux-thunk';


const registerStore = () => {
    let combinedReducers = ReducerCombiner.combinedReducers;
}
const AppStore = createStore(
    combinedReducers,
    applyMiddleware(
        thunk,
        // async as Redux.Middleware,
        // logger as Redux.Middleware
    )
);

export default AppStore;