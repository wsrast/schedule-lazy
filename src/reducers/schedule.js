import types from '../actions/actiontypes';

export default (schedule = {}, action) => {
	switch (action.type) {
		case types.SELECT_TIME: {
			const {time, name, phone} = action.payload;
			return Object.assign({}, schedule, {
				[time]: {
					isScheduled: true,
					name,
					phone
				}
			});
		}
		case types.CLEAR_TIME: {
			const {time} = action.payload;
			return Object.assign({}, schedule, {
				[time]: {
					isScheduled: false,
					name: '',
					phone: ''
				}
			});
		}
		default:
			return schedule;
	}
};
