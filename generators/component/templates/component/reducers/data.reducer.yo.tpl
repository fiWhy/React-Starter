import { DASHBOARD_CONST } from '../constants';
export const DashboardDataReducer = (state = [], action): number[] => {
    switch (action.type) {
        case DASHBOARD_CONST:
            return action.text?[1,2,3]: [];
        default:
            return state;
    }
}