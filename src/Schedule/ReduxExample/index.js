import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configStore from '../../store';

import ReduxSection from './ReduxSection';

export default class ReduxExample extends Component {
	render() {
		return (
			<Provider store={configStore()}>
				<ReduxSection />
			</Provider>
		);
	}
}
