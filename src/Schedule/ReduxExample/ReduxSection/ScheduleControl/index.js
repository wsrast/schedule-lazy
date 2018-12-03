import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from 'reactstrap/dist/reactstrap.full.min';

const ULStyled = styled.ul`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(9, 1fr);
	height: 200px;
	padding-left: 0;

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
		background-color: ${({reserved}) => (reserved ? '#900' : '')}
		
		&:hover {
			background-color: ${({reserved}) => (reserved ? '#b00' : '')}
		}
	}

	//don't focus the selected button
	.btn-secondary:focus,
	.btn-secondary:not(:disabled):not(.disabled):active:focus {
		box-shadow: 0 0 0 0 transparent;
	}
`;

const getEndTime = (time) => {
	let ampm = time.match(/\D+$/),
		digits = time.match(/^\d+/),
		is12,
		isGt12;

	ampm = ampm && Array.isArray(ampm) && ampm[0];
	digits = digits && Array.isArray(digits) && parseInt(digits[0]);
	is12 = ++digits === 12;
	isGt12 = digits > 12;

	if (is12) {
		ampm = ampm === 'am' ? 'pm' : 'am';
	} else if (isGt12) {
		digits = 1;
	}

	return `${digits}${ampm}`;
};

const ScheduleControl = (props) => {
	const {schedule, handleOpenTime} = props;
	return (
		<ULStyled>
			{Object.keys(schedule).map((time) => (
				<LIStyled key={time} reserved={schedule[time].isScheduled}>
					<Button onClick={() => handleOpenTime(time)}>
						{time}-{getEndTime(time)}
					</Button>
				</LIStyled>
			))}
		</ULStyled>
	);
};
ScheduleControl.propTypes = {
	schedule: PropTypes.object.isRequired
};

export default ScheduleControl;
