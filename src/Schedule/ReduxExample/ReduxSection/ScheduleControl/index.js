import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ULStyled = styled.ul`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(9, 1fr);
	height: 200px;
`;

const LIStyled = styled.li`
	background-color: #ccc;
	list-style: none;
	margin: 1px 0 0 0;

	&:hover {
		background-color: #fc6;
		outline: 1px solid #999;
		cursor: pointer;
	}
`;

const ScheduleControl = (props) => {
	const {schedule, selectTime} = props;
	return (
		<ULStyled>
			{Object.keys(schedule).map((time) => (
				<LIStyled key={time} onClick={() => selectTime(time)}>
					{time}
				</LIStyled>
			))}
		</ULStyled>
	);
};
ScheduleControl.propTypes = {
	schedule: PropTypes.object.isRequired
};

export default ScheduleControl;
