import { IReducerProvider } from '../../../utils/reducer/contracts/reducer.provider';
import { IReducerCombiner } from '../../../utils/reducer/reducer.combiner';
import { HomeDataReducer } from '../reducers/data.reducer';

class HomeReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer('homeData', HomeDataReducer);
    }
}

const _HomeReducerProvider = new HomeReducerProvider;

export default _HomeReducerProvider;