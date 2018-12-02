import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const ULStyled = styled.ul`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(9, 1fr);
	height: 200px;

	li {
		margin-bottom: 1px;
	}

	li:first-child .btn {
		border-radius: 8px 8px 0 0;
	}

	li:last-child .btn {
		border-radius: 0 0 8px 8px;
	}
`;

const LIStyled = styled.li`
	list-style: none;

	.btn {
		min-width: 100%;
		border-radius: 0;
	}

	//don't focus the selected button
	.btn-secondary:focus,
	.btn-secondary:not(:disabled):not(.disabled):active:focus {
		box-shadow: 0 0 0 0 transparent;
	}
`;

const ScheduleControl = (props) => {
	const {schedule, selectTime} = props;
	return (
		<ULStyled>
			{Object.keys(schedule).map((time) => (
				<LIStyled key={time}>
					<Button onClick={() => selectTime(time)}>{time}</Button>
				</LIStyled>
			))}
		</ULStyled>
	);
};
ScheduleControl.propTypes = {
	schedule: PropTypes.object.isRequired
};

export default ScheduleControl;
