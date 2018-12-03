import React from 'react';
import {ScheduleContextProvider} from '../../contexts/ScheduleContext';
import ContextSection from './ContextSection';

const ContextExample = () => (
	<ScheduleContextProvider>
		<ContextSection />
	</ScheduleContextProvider>
);

export default ContextExample;
