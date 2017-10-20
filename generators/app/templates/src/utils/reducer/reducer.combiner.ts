import {IReducerProvider} from './contracts/reducer.provider';
import {combineReducers} from 'redux';

export interface IReducerCombiner {
    registerReducer(reducerName: string, reducerFnc: Function): void;
    registerReducerProvider(service): void;
}

class Combiner implements IReducerCombiner {
    private _reducers: any = {};
    private _reducerProviders: IReducerProvider[] = [];
    
    registerReducer(reducerName: string, reducerFnc: Function): void {
        if(this._reducers[reducerName]) 
            throw `Reducer with name ${reducerName} is already registered!`;

            this._reducers[reducerName] = reducerFnc;
    }

    registerReducerProvider(service): void {
        this._reducerProviders.push(service);
    }

    get reducerProviders() {
        return this._reducerProviders;
    }

    get combinedReducers() {
        this._reducerProviders.forEach((provider: IReducerProvider) => {
            if(provider.boot)
                provider.boot();

            provider.register(this);
        })

        return combineReducers(this._reducers);
    }

}

export const ReducerCombiner = new Combiner;