import React, {Fragment} from 'react';
import {ScheduleContextConsumer} from '../../../contexts/ScheduleContext';
import ScheduleControl from '../../ScheduleControl';
import SelectTimeModal from '../../SelectTimeModal';

const ContextSection = () => {
	return (
		<ScheduleContextConsumer>
			{({
				isOpen,
				formData,
				schedule,
				handleOpenTime,
				handleToggle,
				handleCancel,
				handleClear,
				handleSubmit,
				handleChange
			}) => (
				<Fragment>
					<h5>Click to set an appointment</h5>
					<ScheduleControl
						schedule={schedule}
						handleOpenTime={handleOpenTime}
					/>
					<SelectTimeModal
						isOpen={isOpen}
						handleToggle={handleToggle}
						handleCancel={handleCancel}
						handleClear={handleClear}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						formData={formData}
					/>
				</Fragment>
			)}
		</ScheduleContextConsumer>
	);
};

export default ContextSection;
