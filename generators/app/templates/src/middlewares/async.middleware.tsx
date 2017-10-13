const REQUEST_PENDING = 'REQUEST_PENDING';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_ERROR = 'REQUEST_ERROR';

export const async = store => next => action => {
    if(action.async) {
        action.state = REQUEST_PENDING;
        next(action);

        action.async(next)
            .then(res => {
                action.state = REQUEST_SUCCESS;
                action.response = res.json();
                next(action);
            }).error(err => {
                throw `Error while proceeding ${action.type}`;
            })
    } else {
        next(action);
    }
}