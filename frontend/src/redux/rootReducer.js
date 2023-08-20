import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import { persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
import visibilityReducer from './visibility/visibilityReducer';


const rootReducer = combineReducers({
    
    auth: authReducer,
    visibility: visibilityReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;