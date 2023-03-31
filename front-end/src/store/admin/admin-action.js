import ADMIN_ACTION_TYPES from './admin-type';

export const setCurrentAdmin = (admin) => ({ type: ADMIN_ACTION_TYPES.SET_CURRENT_ADMIN, payload: admin });

export const removeAdmin = () => ({ type: ADMIN_ACTION_TYPES.SET_CURRENT_ADMIN, payload: {} });

export const setAdminError = (error) => ({ type: ADMIN_ACTION_TYPES.SET_ADMIN_ERROR, payload: error });