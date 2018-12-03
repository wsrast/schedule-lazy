import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import schedule from '../shared/schedule-data';

const initialStore = {
	schedule
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = initialStore) => {
	return createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;
