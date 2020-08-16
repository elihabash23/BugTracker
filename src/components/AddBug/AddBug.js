import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class AddBug extends Component {

	constructor(props) {
		super(props);

		this.state = {
			description: "",
			created: "",
			due: "",
			reporter: "",
			status: "",
			severity: ""
		}
	}
	
	submitBug = (e) => {
		alert(this.state.description);
		e.preventDefault();
	}

	bugChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {
		return (
			<Card className="border border-dark bg-dark text-white">
				<Card.Header><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Add Bug</Card.Header>
					<Form onSubmit={this.submitBug} id="BugFormId">
						<Card.Body>
							<Form.Group controlId="formGridDescription">
								<Form.Label>Description</Form.Label>
								<Form.Control required
									type="text" name="description"
									placeholder="Description"
									value={this.state.description}
									onChange={this.bugChange}
									className="bg-dark text-white"/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid description.
									</Form.Control.Feedback>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridCreated">
									<Form.Label>Created</Form.Label>
									<Form.Control required
										type="date" name="created"
										className="bg-dark text-white"
										value={this.state.created}
										onChange={this.bugChange}/>
								</Form.Group>
									<Form.Group as={Col} controlId="formGridDue">
									<Form.Label>Due</Form.Label>
									<Form.Control required
										type="date" name="due"
										className="bg-dark text-white"
										value={this.state.due}
										onChange={this.bugChange}/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridReporter">
									<Form.Label>Reporter</Form.Label>
										<Form.Control required
											className="bg-dark text-white"
											as="select"
											name="reporter"
											value={this.state.reporter}
											onChange={this.bugChange}>	
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridStatus">
									<Form.Label>Status</Form.Label>
										<Form.Control required
											className="bg-dark text-white"
											as="select"
											name="status"
											value={this.state.status}
											onChange={this.bugChange}>	
											<option>In Progress</option>
											<option>Closed</option>
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridSeverity">
									<Form.Label>Severity</Form.Label>
										<Form.Control required
											className="bg-dark text-white"
											as="select"
											name="severity"
											value={this.state.severity}
											onChange={this.bugChange}>
											<option>Minor</option>
											<option>Major</option>	
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridReproducable">
									<Form.Label>Reproducable?</Form.Label>
										<Form.Control
											className="bg-dark text-white"
											as="select"
											name="reproducable"
											value={this.state.reproducable}
											onChange={this.bugChange}>
											<option>Yes</option>
											<option>No</option>	
										</Form.Control>
								</Form.Group>
							</Form.Row>
						</Card.Body>
					</Form>
				<Card.Footer style={{"textAlign": "right"}}>
						<Button variant="success" type="submit" onClick={this.submitBug}>
							<FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Submit
						</Button>
					</Card.Footer>
			</Card>
		)
	}
}

export default AddBug;
