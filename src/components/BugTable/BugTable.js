import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as queries from '../../graphql/queries';
API.configure(awsconfig);

class BugTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bugs: []
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		const allBugs = API.graphql(graphqlOperation(queries.listBugs))
		.then(bug => {
			this.setState({ bugs: bug.data.listBugs.items});
			//console.log(bug.data.listBugs.items);
		})
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
							<th>Actions</th>
						</tr>
					</thead>
					<tbody> 
						{
							this.state.bugs.length === 0 ?
							<tr align="center">
								<td colSpan="9">No bugs to fix</td>
							</tr> :
							this.state.bugs.map((bug, i) => (
								<tr key={i}>
									<td>{i+1}</td>
									<td>{bug.description}</td>
									<td>{bug.createdAt}</td>
									<td>{bug.name}</td>
									<td>{bug.dueDate}</td>
									<td>{bug.status}</td>
									<td>{bug.severity}</td>
									<td>{bug.reproducable}</td>
									<td>
										<ButtonGroup>
											<Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
											<Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
										</ButtonGroup>
									</td>
								</tr>
							))

						}
						
					</tbody>
					</Table>
				</Card.Body>
			</Card>
		)
	}
}

export default BugTable;
