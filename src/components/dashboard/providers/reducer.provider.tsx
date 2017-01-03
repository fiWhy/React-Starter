import {IReducerProvider} from '../../../utils/reducer/contracts/reducer.provider';
import {IReducerCombiner} from '../../../utils/reducer/reducer.combiner';
import DashboardReducer from '../reducers';

class DashboardReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer('dashboard', DashboardReducer);
    }
}

const _DashboardReducerProvider = new DashboardReducerProvider;

export default _DashboardReducerProvider;