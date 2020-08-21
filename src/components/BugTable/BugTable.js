import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as queries from '../../graphql/queries';
API.configure(awsconfig);

class BugTable extends Component {

	componentDidMount() {
		//this.fetchData();
	}

	fetchData = () => {
		const allBugs = API.graphql(graphqlOperation(queries.listBugs));
		console.log(allBugs);
	}

	render() {
		return (
			<Card className="border border-dark bg-dark text-white">
				<Card.Header><FontAwesomeIcon icon={faList}></FontAwesomeIcon> Bug Table</Card.Header>
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
