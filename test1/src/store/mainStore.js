import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducer';
export default function mainStore(initialState){
    return createStore(rootReducer,initialState,applyMiddleware(thunk))
}