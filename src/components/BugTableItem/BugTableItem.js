import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { API, graphqlOperation} from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import { Link } from 'react-router-dom';

API.configure(awsconfig);

function BugTableItem(props) {
	const createdDate = new Date(Date.parse(props.createdAt));
	const dueDate = new Date(Date.parse(props.dueDate));
	//console.log(createdDate.toISOString());

	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.description}</td>
			<td>{createdDate.getMonth()+1 + "/" + (createdDate.getDate()+1) + "/" + createdDate.getFullYear()}</td>
			<td>{props.name}</td>
			<td>{dueDate.getMonth()+1 + "/" + (dueDate.getDate()+1) + "/" + dueDate.getFullYear()}</td>
			<td>{props.status}</td>
			<td>{props.severity}</td>
			<td>{props.reproducable}</td>
			<td>
				<ButtonGroup>
					<Link to={"edit/"+props.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>
					<Button size="sm" variant="outline-danger" onClick={props.deleteBug}><FontAwesomeIcon icon={faTrash} /></Button>
				</ButtonGroup>
			</td>
		</tr>
	)
}

export default BugTableItem
