import {IReducerCombiner} from '../reducer.combiner';

export interface IReducerProvider {
    boot?(): void;
    register(reducerCombiner?: IReducerCombiner): void;
}
