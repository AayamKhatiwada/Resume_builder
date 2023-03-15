import RESUME_ACTION_TYPES from './resume-type';

export const setCurrentResume = (resume) => ({ type: RESUME_ACTION_TYPES.SET_CURRENT_RESUME, payload: resume });

export const removeResume = () => ({ type: RESUME_ACTION_TYPES.SET_CURRENT_RESUME, payload: {} });

export const setResumeError = (error) => ({ type: RESUME_ACTION_TYPES.SET_RESUME_ERROR, payload: error });

export const setCurrentRecommendationResume = (resume) => ({ type: RESUME_ACTION_TYPES.SET_CURRENT_RECOMMENDATION_RESUME, payload: resume });

export const removeRecommendationResume = () => ({ type: RESUME_ACTION_TYPES.SET_CURRENT_RECOMMENDATION_RESUME, payload: {} });

export const setRecommendationResumeError = (error) => ({ type: RESUME_ACTION_TYPES.SET_RECOMMENDATION_RESUME_ERROR, payload: error });