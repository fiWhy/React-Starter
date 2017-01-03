import { MAIN_CONST } from '../constants/main.constants';
export const MainHomeReducer = (state = [], action): number[] => {
    switch (action.type) {
        case MAIN_CONST:
            return action.text?[1,2,3]: [];
        default:
            return state;
    }
}