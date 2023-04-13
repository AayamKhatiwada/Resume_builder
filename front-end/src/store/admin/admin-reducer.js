import ADMIN_ACTION_TYPES from './admin-type';

export const ADMIN_INITIAL_STATE = {
    currentAdmin: {admin: false},
    error: [],
};

export const adminReducer = (state = ADMIN_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case ADMIN_ACTION_TYPES.SET_CURRENT_ADMIN:
            return { ...state, currentAdmin: payload };
        case ADMIN_ACTION_TYPES.SET_ADMIN_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};