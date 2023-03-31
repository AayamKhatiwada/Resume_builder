import { combineReducers } from 'redux';
import { adminReducer } from './admin/admin-reducer';
import { resumeReducer } from './resume/resume-reducer';
import { userReducer } from './user/user-reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  resume: resumeReducer,
});