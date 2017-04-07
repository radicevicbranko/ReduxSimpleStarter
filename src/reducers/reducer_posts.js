import { FETCH_POSTS, GET_POST } from '../actions/index';

export default (state = { all: [], post: null }, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            var result = { ...state, all: action.payload.data };
            return result;
        case GET_POST:
            var result = { ...state, post: action.payload.data };
            return result;
        default:
            return state;
    }
};

