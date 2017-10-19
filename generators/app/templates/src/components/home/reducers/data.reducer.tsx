import { MAIN_CONST } from '../constants';
export const HomeDataReducer = (state = [], action): number[] => {
    switch (action.type) {
        case MAIN_CONST:
            return action.text?[1,2,3]: [];
        default:
            return state;
    }
}