import React from 'react';
import styled from 'styled-components';
import ReduxExample from './ReduxExample';
import ContextExample from './ContextExample';

const ScheduleStyled = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 80px 60px 1fr;
	margin: 0 10%;
	min-height: 85vh;
`;

const AsideStyled = styled.aside`
	text-align: left;
	padding: 10px 0;
	grid-column: 1/3;
`;

const LabelStyled = styled.h3`
	padding: 10px 0px;
`;

const SectionStyled = styled.section`
	padding: 20px;
`;

const Schedule = () => (
	<ScheduleStyled>
		<AsideStyled>
			<p>
				While the instructions called only for a Redux solution, I thought the
				problem lent itself to a Context based state, so I've added a second
				section here to show how that would be done. Both solutions use the same
				shared UI logic and rendering Components.
			</p>
		</AsideStyled>
		<LabelStyled>Redux State</LabelStyled>
		<LabelStyled>Context State</LabelStyled>
		<SectionStyled>
			<ReduxExample />
		</SectionStyled>
		<SectionStyled>
			<ContextExample />
		</SectionStyled>
	</ScheduleStyled>
);

export default Schedule;
