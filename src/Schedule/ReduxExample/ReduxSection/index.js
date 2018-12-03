import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as handlers from '../../../shared/handlers';

//import {selectTime} from '../../../actions/schedule';
import * as scheduleActionCreators from '../../../actions/schedule';
import ScheduleControl from '../../ScheduleControl';
import SelectTimeModal from '../../SelectTimeModal';

class ReduxSection extends Component {
	constructor(props) {
		super(props);

		this.boundActionCreators = bindActionCreators(
			scheduleActionCreators,
			props.dispatch
		);

		this.handleToggle = handlers.handleToggle.bind(this);
		this.handleCancel = handlers.handleCancel.bind(this);
		this.handleChange = handlers.handleChange.bind(this);
		this.handleClear = handlers.handleClear.bind(this);
		this.handleSubmit = handlers.handleSubmit.bind(this);
		this.handleOpenTime = handlers.handleOpenTime.bind(this);

		this.state = {
			isOpen: false,
			timeOpen: null,
			formData: {
				name: '',
				phone: ''
			}
		};
	}

	clearTime = (time) => {
		this.boundActionCreators.clearTime(time);
	};

	selectTime = (payload) => {
		this.boundActionCreators.selectTime(payload);
	};

	render() {
		const {formData, isOpen} = this.state,
			{schedule} = this.props;

		return (
			<section>
				<h5>Click to set an appointment.</h5>
				<ScheduleControl
					schedule={schedule}
					{...this.boundActionCreators}
					handleOpenTime={this.handleOpenTime}
				/>
				<SelectTimeModal
					isOpen={isOpen}
					handleToggle={this.handleToggle}
					handleCancel={this.handleCancel}
					handleClear={this.handleClear}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					formData={formData}
				/>
			</section>
		);
	}
}

const mapStateToProps = ({schedule}) => ({schedule});

export default connect(mapStateToProps)(ReduxSection);
