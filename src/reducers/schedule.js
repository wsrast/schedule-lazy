import types from '../actions/actiontypes';

export default (state = {}, action) => {
	switch (action.type) {
		case types.SELECT_TIME:
			return {
				schedule: action.payload
			};
		default:
			return state;
	}
};
