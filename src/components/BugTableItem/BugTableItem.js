import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function BugTableItem(props) {
	const createdDate = new Date(Date.parse(props.createdAt));
	const dueDate = new Date(Date.parse(props.dueDate));
	console.log(createdDate.toISOString());
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.description}</td>
			<td>{createdDate.getMonth() + "/" + createdDate.getDate() + "/" + createdDate.getFullYear()}</td>
			<td>{props.name}</td>
			<td>{dueDate.getMonth() + "/" + dueDate.getDate() + "/" + dueDate.getFullYear()}</td>
			<td>{props.status}</td>
			<td>{props.severity}</td>
			<td>{props.reproducable}</td>
			<td>
				<ButtonGroup>
					<Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
					<Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
				</ButtonGroup>
			</td>
		</tr>
	)
}

export default BugTableItem
