import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';

class AddBug extends Component {
	render() {
		return (
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>Add Bug</Card.Header>
					<Form>
						<Card.Body>
							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control 
									type="text" 
									placeholder="Description"
									className="bg-dark text-white"/>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Created</Form.Label>
									<Form.Control 
										type="date" 
										className="bg-dark text-white"/>
								</Form.Group>
									<Form.Group as={Col}>
									<Form.Label>Due</Form.Label>
									<Form.Control 
										type="date" 
										className="bg-dark text-white"/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Reporter</Form.Label>
										<Form.Control
											className="bg-dark text-white"
											as="select">	
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Status</Form.Label>
										<Form.Control
											className="bg-dark text-white"
											as="select">	
											<option>In Progress</option>
											<option>Closed</option>
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Severity</Form.Label>
										<Form.Control
											className="bg-dark text-white"
											as="select">
											<option>Minor</option>
											<option>Major</option>	
										</Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Reproducable?</Form.Label>
										<Form.Control
											className="bg-dark text-white"
											as="select">
											<option>Yes</option>
											<option>No</option>	
										</Form.Control>
								</Form.Group>
							</Form.Row>
						</Card.Body>
					</Form>
				<Card.Footer style={{"textAlign": "right"}}>
						<Button variant="success" type="submit">
							Submit
						</Button>
					</Card.Footer>
			</Card>
		)
	}
}

export default AddBug;
