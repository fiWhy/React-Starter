import { IReducerProvider } from '../../../utils/reducer/contracts/reducer.provider';
import { IReducerCombiner } from '../../../utils/reducer/reducer.combiner';
import { <%= componentName %>DataReducer } from '../reducers/data.reducer';

class <%= componentName %>ReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer('<%= componentNameCamel %>Data', <%= componentName %>DataReducer);
    }
}

const _<%= componentName %>ReducerProvider = new <%= componentName %>ReducerProvider;

export default _<%= componentName %>ReducerProvider;