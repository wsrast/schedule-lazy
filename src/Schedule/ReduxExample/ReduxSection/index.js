import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import {selectTime} from '../../../actions/schedule';
import * as scheduleActionCreators from '../../../actions/schedule';

class ReduxSection extends Component {
	constructor(props) {
		super(props);

		this.boundActionCreators = bindActionCreators(
			scheduleActionCreators,
			props.dispatch
		);
	}

	checkRedux = (e) => {
		this.boundActionCreators.selectTime('foo');
	};

	render() {
		return (
			<section>
				<h4>Here's Redux connected</h4>
				<br />
				<button onClick={this.checkRedux}>Check Redux</button>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(ReduxSection);
