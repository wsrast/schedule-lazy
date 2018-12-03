import React, {Component} from 'react';
import * as handlers from '../shared/handlers';
import schedule from '../shared/schedule-data';

const ScheduleContext = React.createContext();

export class ScheduleContextProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			timeOpen: null,
			formData: {
				name: '',
				phone: ''
			},
			schedule
		};

		this.handleToggle = handlers.handleToggle.bind(this);
		this.handleCancel = handlers.handleCancel.bind(this);
		this.handleChange = handlers.handleChange.bind(this);
		this.handleClear = handlers.handleClear.bind(this);
		this.handleSubmit = handlers.handleSubmit.bind(this);
		this.handleOpenTime = handlers.handleOpenTime.bind(this);
	}

	clearTime = (payload) => {
		const {time} = payload;

		this.setState({
			schedule: Object.assign({}, this.state.schedule, {
				[time]: {
					isScheduled: false,
					name: '',
					phone: ''
				}
			})
		});
	};

	selectTime = (payload) => {
		const {time, name, phone} = payload;
		this.setState({
			schedule: Object.assign({}, this.state.schedule, {
				[time]: {
					isScheduled: true,
					name,
					phone
				}
			})
		});
	};

	render() {
		const {children} = this.props;

		return (
			<ScheduleContext.Provider
				value={{
					handleToggle: this.handleToggle,
					handleCancel: this.handleCancel,
					handleChange: this.handleChange,
					handleClear: this.handleClear,
					handleSubmit: this.handleSubmit,
					handleOpenTime: this.handleOpenTime,
					...this.state
				}}
			>
				{children}
			</ScheduleContext.Provider>
		);
	}
}

export const ScheduleContextConsumer = ScheduleContext.Consumer;
