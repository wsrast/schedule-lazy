import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialStore = {
	schedule: {
		'9am': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'10am': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'11am': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'12pm': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'1pm': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'2pm': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'3pm': {
			isScheduled: false,
			name: '',
			phone: ''
		},
		'4pm': {
			isScheduled: false,
			name: '',
			phone: ''
		}
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
