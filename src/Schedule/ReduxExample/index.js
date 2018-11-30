import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configStore from '../../store';
import styled from 'styled-components';

import ReduxSection from './ReduxSection';

export default class ReduxExample extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={configStore()}>
				<ReduxSection />
			</Provider>
		);
	}
}
