import React, {Component} from 'react';
import styled from 'styled-components';
import Schedule from './Schedule';
import 'bootstrap/dist/css/bootstrap.css';

const AppStyled = styled.div`
	text-align: center;
`;

const HeaderStyled = styled.header`
	background-color: #282c34;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

class App extends Component {
	render() {
		return (
			<AppStyled>
				<HeaderStyled>Scheduling example</HeaderStyled>
				<Schedule />
			</AppStyled>
		);
	}
}

export default App;
