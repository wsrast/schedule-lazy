import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import {selectTime} from '../../../actions/schedule';
import * as scheduleActionCreators from '../../../actions/schedule';
import ScheduleControl from './ScheduleControl';
import SelectTimeModal from '../../SelectTimeModal';

class ReduxSection extends Component {
	constructor(props) {
		super(props);

		this.boundActionCreators = bindActionCreators(
			scheduleActionCreators,
			props.dispatch
		);

		this.handleToggle = this.handleToggle.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpenTime = this.handleOpenTime.bind(this);

		this.state = {
			isOpen: false,
			timeOpen: null,
			formData: {
				name: '',
				phone: ''
			}
		};
	}

	handleToggle = () => {
		this.setState(({isOpen}) => ({isOpen: !isOpen}));
	};

	handleCancel = () => {
		this.handleToggle();
	};

	handleChange = (e) => {
		const {name, value} = e.target;

		this.setState({
			formData: {...this.state.formData, [name]: value}
		});
	};

	handleClear = () => {
		this.boundActionCreators.clearTime({time: this.state.timeOpen});
		this.setState({
			timeOpen: null,
			formData: {name: '', phone: ''}
		});
		this.handleToggle();
	};

	handleSubmit = () => {
		const {
			timeOpen,
			formData: {name, phone}
		} = this.state;

		this.boundActionCreators.selectTime({
			time: timeOpen,
			name,
			phone
		});
		this.setState({timeOpen: null});
		this.handleToggle();
	};

	handleOpenTime = (time) => {
		const {name, phone} = this.props.schedule[time];

		this.handleToggle();
		this.setState({
			timeOpen: time,
			formData: {
				name,
				phone
			}
		});
	};

	render() {
		const {formData, isOpen} = this.state,
			{schedule} = this.props;

		return (
			<section>
				<h5>Click to set an appointment.</h5>
				{/*<div>{JSON.stringify(this.props)}</div>*/}
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
