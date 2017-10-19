import {IReducerProvider} from '../../../utils/reducer/contracts/reducer.provider';
import {IReducerCombiner} from '../../../utils/reducer/reducer.combiner';
import { DashboardDataReducer } from '../reducers/data.reducer';

class DashboardReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer('dashboardData', DashboardDataReducer);
    }
}

const _DashboardReducerProvider = new DashboardReducerProvider;

export default _DashboardReducerProvider;