import React, { Component } from 'react'
import classes from './BugTable.module.css';
import { Card, Table } from 'react-bootstrap';

class BugTable extends Component {
	render() {
		return (
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>Bug Table</Card.Header>
				<Card.Body>
					<Table bordered hover striped variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Decription</th>
							<th>Created</th>
							<th>Reporter</th>
							<th>Due Date</th>
							<th>Status</th>
							<th>Severity</th>
							<th>Reproducable?</th>
						</tr>
					</thead>
					<tbody>
						<tr align="center">
							<td colSpan="8">No Bugs to fix</td>
						</tr>
					</tbody>
					</Table>
				</Card.Body>
			</Card>
		)
	}
}

export default BugTable;
