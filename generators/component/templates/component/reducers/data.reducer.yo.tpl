import { <%= upperComponentName %>_CONST } from '../constants';
export const <%= componentName %>DataReducer = (state = [], action): number[] => {
    switch (action.type) {
        case <%= upperComponentName %>_CONST:
            return action.text?[1,2,3]: [];
        default:
            return state;
    }
}