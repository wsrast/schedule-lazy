import React, {Component} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap/dist/reactstrap.full.min';

export default class ScheduleTimeModal extends Component {
	static defaultProps = {
		className: ''
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			isOpen,
			className,
			handleCancel,
			handleClear,
			handleChange,
			handleSubmit,
			handleToggle,
			formData
		} = this.props;

		return (
			<div>
				<Modal isOpen={isOpen} toggle={handleToggle} className={className}>
					<ModalHeader toggle={handleToggle}>
						Enter Appointment Information
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="apptName">Full Name</Label>
								<Input
									onChange={handleChange}
									type="text"
									name="name"
									id="apptName"
									value={formData.name}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="apptPhone">Phone Number</Label>
								<Input
									onChange={handleChange}
									type="text"
									name="phone"
									id="apptPhone"
									value={formData.phone}
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={handleCancel}>
							Cancel
						</Button>
						<Button color="secondary" onClick={handleClear}>
							Clear
						</Button>
						<Button color="primary" onClick={handleSubmit}>
							Schedule Appointment
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
