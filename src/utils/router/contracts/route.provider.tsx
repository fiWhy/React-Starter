import {IRouteCombiner} from '../route.combiner';

export interface IRouteProvider {
    boot?(): void;
    register(reducerCombiner?: IRouteCombiner): void;
}
