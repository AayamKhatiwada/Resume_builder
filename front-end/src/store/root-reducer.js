import { combineReducers } from 'redux';
import { resumeReducer } from './resume/resume-reducer';
// import { orderReducer } from './order/order-reducer';
// import { productReducer } from './products/products-reducer';
import { userReducer } from './user/user-reducer'

export const rootReducer = combineReducers({
//   products: productReducer,
//   order: orderReducer,
  user: userReducer,
  resume: resumeReducer,
});