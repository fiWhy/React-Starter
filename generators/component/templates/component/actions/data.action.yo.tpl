import { <%= upperComponentName %>_CONST } from '../constants';
export const Main<%= componentName %>Action = (text: string) => 
    dispatch => {
        dispatch({type: <%= upperComponentName %>_CONST});
        setTimeout(() => {
            dispatch({type: <%= upperComponentName %>_CONST, text});
        }, 1000);
    };