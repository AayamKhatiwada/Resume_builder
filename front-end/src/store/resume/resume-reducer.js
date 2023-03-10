import RESUME_ACTION_TYPES from './resume-type';

export const RESUME_INITIAL_STATE = {
    currentResume: [],
    error: [],
};

export const resumeReducer = (state = RESUME_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case RESUME_ACTION_TYPES.SET_CURRENT_RESUME:
            return { ...state, currentResume: payload };
        case RESUME_ACTION_TYPES.SET_RESUME_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};