import types from './actiontypes';

export const selectTime = (payload) => (dispatch) => {
	dispatch({
		type: types.SELECT_TIME,
		payload
	});
};
