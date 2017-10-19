import {MAIN_CONST} from '../constants';
export const MainHomeAction = (text: string) => 
    dispatch => {
        dispatch({type: MAIN_CONST});
        setTimeout(() => {
            dispatch({type: MAIN_CONST, text});
        }, 1000);
    };