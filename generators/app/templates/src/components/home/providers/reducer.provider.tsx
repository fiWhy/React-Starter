import {IReducerProvider} from '../../../utils/reducer/contracts/reducer.provider';
import {IReducerCombiner} from '../../../utils/reducer/reducer.combiner';
import { MainHomeReducer } from '../reducers/main.reducer';

class HomeReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer('home', MainHomeReducer);
    }
}

const _HomeReducerProvider = new HomeReducerProvider;

export default _HomeReducerProvider;