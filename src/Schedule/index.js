import React from 'react';
import styled from 'styled-components';
import ReduxExample from './ReduxExample';

const ScheduleStyled = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 60px 1fr;
	margin: 0 10%;
`;

const LabelStyled = styled.h3`
	padding: 0px;
`;

const SectionStyled = styled.section`
	padding: 20px;
`;

const Schedule = (props) => (
	<ScheduleStyled>
		<LabelStyled>Redux State</LabelStyled>
		<LabelStyled>Context State</LabelStyled>
		<SectionStyled>
			<ReduxExample />
		</SectionStyled>
		<SectionStyled>Context Example</SectionStyled>
	</ScheduleStyled>
);

export default Schedule;
