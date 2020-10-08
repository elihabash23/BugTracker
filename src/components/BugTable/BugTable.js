import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import moment from 'moment';
import BugTableItem from '../BugTableItem/BugTableItem';
import MyToast from '../MyToast/MyToast';

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
			//console.log(typeof this.state.bugs[0].createdAt);
			console.log(bug.data.listBugs.items);
		})
	}

	deleteBug = (id) => {
		API.graphql(graphqlOperation(mutations.deleteBug, {input: {'id': id}}))
		.then(response => {
			if (response.data != null) {
				this.setState({"show": true});
				setTimeout(() => this.setState({"show": false}), 3000);
				this.setState({ bugs: this.state.bugs.filter(bug => bug.id !== id)});
			} else {
				this.setState({"show": false})
			}
		})
	}

	editBug = () => {
		alert('edit');
	}

	render() {
		return (
			<div>
				<div style={{"display": this.state.show ? "block": "none"}}>
					<MyToast show={this.state.show} message={"Bug Deleted Successfully"} type={"danger"}/>
				</div>
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
									 id={bug.id}
									 description={bug.description}
									 createdAt={bug.createdAt}
									 name={bug.name}
									 dueDate={moment().format(bug.dueDate)}
									 status={bug.status}
									 severity={bug.severity}
									 reproducable={bug.reproducable}
									 deleteBug={() => this.deleteBug(bug.id)}
									 editBug={this.editBug}
								/>
							))
						}
						
					</tbody>
					</Table>
				</Card.Body>
			</Card>
			</div>
		)
	}
}

export default BugTable;
