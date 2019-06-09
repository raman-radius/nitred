import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import subredditReducer from '../reducers/subredditReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () =>{
	return createStore(
			combineReducers({
				item : subredditReducer	
			}),
			composeEnhancers(applyMiddleware(thunk))
		)
}


