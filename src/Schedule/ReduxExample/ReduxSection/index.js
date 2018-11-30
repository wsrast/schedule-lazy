import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import {selectTime} from '../../../actions/schedule';
import * as scheduleActionCreators from '../../../actions/schedule';
import ScheduleControl from './ScheduleControl';

class ReduxSection extends Component {
	constructor(props) {
		super(props);

		this.boundActionCreators = bindActionCreators(
			scheduleActionCreators,
			props.dispatch
		);
	}

	checkRedux = (e) => {
		this.boundActionCreators.selectTime('10am');
	};

	render() {
		return (
			<section>
				<h4>Here's Redux connected</h4>
				<div>
					<button onClick={this.checkRedux}>Check Redux</button>
				</div>
				<div>{JSON.stringify(this.props)}</div>
				<ScheduleControl
					schedule={this.props.schedule}
					{...this.boundActionCreators}
				/>
			</section>
		);
	}
}

const mapStateToProps = ({schedule}) => ({schedule});

export default connect(mapStateToProps)(ReduxSection);
