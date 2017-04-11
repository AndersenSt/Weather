import { FETCH_WEATHER, DELET_LOCATION } from '../actions';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

        case DELET_LOCATION:
            const index = state.findIndex(location => location.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        default: return state;
    }
}

export default reducer;