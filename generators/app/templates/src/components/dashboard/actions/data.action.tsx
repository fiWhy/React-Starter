import {DASHBOARD_CONST} from '../constants';
export const MainHomeAction = (text: string) => 
    dispatch => {
        dispatch({type: DASHBOARD_CONST});
        setTimeout(() => {
            dispatch({type: DASHBOARD_CONST, text});
        }, 1000);
    };