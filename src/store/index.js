import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialStore = {
	schedule: {
		'9am': false,
		'10am': false,
		'11am': false,
		'12pm': false,
		'1pm': false,
		'2pm': false,
		'3pm': false,
		'4pm': false
	}
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
