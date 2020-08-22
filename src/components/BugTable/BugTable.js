import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as queries from '../../graphql/queries';
import BugTableItem from '../BugTableItem/BugTableItem';

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
		// eslint-disable-next-line no-unused-vars
		const allBugs = API.graphql(graphqlOperation(queries.listBugs))
		.then(bug => {
			this.setState({ bugs: bug.data.listBugs.items});
			console.log(typeof this.state.bugs[0].createdAt);
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
								<BugTableItem
									 key={i+1}
									 id={i+1}
									 description={bug.description}
									 createdAt={bug.createdAt}
									 name={bug.name}
									 dueDate={bug.dueDate}
									 status={bug.status}
									 severity={bug.severity}
									 reproducable={bug.reproducable}
									 />
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
