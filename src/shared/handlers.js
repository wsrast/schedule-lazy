export function handleToggle() {
	this.setState(({isOpen}) => ({isOpen: !isOpen}));
}

export function handleCancel() {
	this.handleToggle();
}

export function handleChange(e) {
	const {name, value} = e.target;

	this.setState({
		formData: {...this.state.formData, [name]: value}
	});
}

export function handleClear() {
	this.clearTime({time: this.state.timeOpen});
	this.setState({
		timeOpen: null,
		formData: {name: '', phone: ''}
	});
	this.handleToggle();
}

export function handleSubmit() {
	const {
		timeOpen,
		formData: {name, phone}
	} = this.state;

	this.selectTime({
		time: timeOpen,
		name,
		phone
	});
	this.setState({timeOpen: null});
	this.handleToggle();
}

export function handleOpenTime(time) {
	const {name, phone} = (this.props.schedule || this.state.schedule)[time];

	this.handleToggle();
	this.setState({
		timeOpen: time,
		formData: {
			name,
			phone
		}
	});
}
