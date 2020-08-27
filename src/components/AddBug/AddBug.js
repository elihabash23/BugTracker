import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusSquare, faUndo, faList, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import Auth, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import MyToast from '../../components/MyToast/MyToast';

Auth.configure(awsconfig);

class AddBug extends Component {

	constructor(props) {
		super(props);

		this.state = this.initialState;
		this.state.show = false;
	}

	initialState = {
		id: "",
		description: "",
		created: "",
		due: "",
		reporter: "",
		status: "",
		severity: "",
		reproducable: false
	}

	componentDidMount() {
		const bugId = this.props.match.params.id;
		if (bugId) {
			this.findBugById(bugId);
		}
	}

	findBugById = (bugId) => {
		if (bugId) {
			API.graphql(graphqlOperation(queries.getBug, {id: bugId}))
			.then(response => {
				if (response.data != null) {
					this.setState({
						id: response.data.getBug.id,
						description: response.data.getBug.description,
						created: new Date(response.data.getBug.created),
						due: response.data.getBug.due,
						reporter: response.data.getBug.reporter,
						status: response.data.getBug.status,
						severity: response.data.getBug.severity,
						reproducable: response.data.getBug.reproducable
					})
					//console.log(response.data)
				}
			}).catch(error => {
				console.log(error);
			})
		}
	}
	
	submitBug = (e) => {
		e.preventDefault();
		//console.log(this.state.description + " " + this.state.created);
		//console.log(typeof this.state.created);
		var createdDate = new Date(this.state.created);
		var dueDate = new Date(this.state.due);
		const bug = {
			description: this.state.description,
			createdAt: createdDate,
			dueDate: dueDate,
			name: this.state.reporter,
			status: this.state.status,
			severity: this.state.severity,
			Reproducable: this.state.reproducable
		}
		// eslint-disable-next-line no-unused-vars
		const newBug = API.graphql(graphqlOperation(mutations.createBug, {input: bug}))
			.then(response => {
				if (response.data != null) {
					this.setState({"show": true, method: "post"});
					setTimeout(() => this.setState({"show": false}), 3000);
				} else {
					this.setState({"show": false})
				}
			});
		this.setState(this.initialState);
	}

	//Debugging purposes
	showState = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	resetBug = (e) => {
		e.preventDefault();
		this.setState(() => this.initialState);
	}

	updateBug = (e) => {
		e.preventDefault();
		var createdDate = new Date(this.state.created);
		var dueDate = new Date(this.state.due);
		const bug = {
			id: this.state.id,
			description: this.state.description,
			createdAt: createdDate,
			dueDate: dueDate,
			name: this.state.reporter,
			status: this.state.status,
			severity: this.state.severity,
			Reproducable: this.state.reproducable
		}
		API.graphql(graphqlOperation(mutations.updateBug, {input: bug}))
		.then(response => {
			if (response.data != null) {
				this.setState({ show: true, method: "put"});
				setTimeout(() => this.setState({ show: false}), 3000);
				setTimeout(() => this.listBugs(), 3000);
			} else {
				this.setState({ show: false });
			}
		}).catch(error => {
			console.log(error);
		});

		this.setState(this.initialState);
	}

	bugChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	listBugs = () => {
		return this.props.history.push('/table');
	}

	render() {
		return (
			<div>
				<div style={{"display": this.state.show ? "block": "none"}}>
					<MyToast show={this.state.show} 
								message={this.state.method === "put" ? "Bug Updated Successfully" : "Bug Saved Successfully"} 
								type={"primary"}
					/>
				</div>
				<Card className="border border-dark bg-dark text-white">
				<Card.Header>
					<FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare}></FontAwesomeIcon> {this.state.id ? "Update Bug" : "Add Bug"}
				</Card.Header>
					<Form onSubmit={this.submitBug} id="BugFormId">
						<Card.Body>
							<Form.Group controlId="formGridDescription">
								<Form.Label>Description</Form.Label>
								<Form.Control required autoComplete="off"
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
						<Button size="sm" variant="success" type="submit" onClick={this.state.id ? this.updateBug : this.submitBug}>
							<FontAwesomeIcon icon={faSave}></FontAwesomeIcon> {this.state.id ? "Update" : "Save "}
						</Button>{" "}
						<Button size="sm" variant="info" type="reset" onClick={this.resetBug}>
							<FontAwesomeIcon icon={faUndo}></FontAwesomeIcon> Reset
						</Button>{" "}
						<Button size="sm" variant="info" type="button" onClick={this.listBugs}>
							<FontAwesomeIcon icon={faList}></FontAwesomeIcon> Bug Table
						</Button>{" "}
						<Button size="sm" variant="info" type="button" onClick={this.showState}>
							<FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Show State
						</Button>
				</Card.Footer>
			</Card>
			</div>
		)
	}
}

export default AddBug;
