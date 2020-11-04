import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import Reducers

import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

// Combine Reducers
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

// Get UserInfo Data From The Local Storage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Initial State
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

// Create The Store = Holds The State of The Application
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export The Store
export default store;
