import types from '../actions/actiontypes';

export default (schedule = {}, action) => {
	switch (action.type) {
		case types.SELECT_TIME:
			return Object.assign({}, schedule, {
				[action.payload]: !schedule[action.payload]
			});
		default:
			return schedule;
	}
};
