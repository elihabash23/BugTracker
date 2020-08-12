import React, { Component } from 'react'
import classes from './BugTable.module.css';

class BugTable extends Component {
	render() {
		return (
			<div>
				<h3>Bug Table Component</h3>
				<table className={classes.center}>
					<tbody>
						<tr>
							<th>
								Bugs Header
							</th>
						</tr>
						<tr>Bug 1</tr>
						<tr>Bug 2</tr>
						<tr>Bug 3</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default BugTable;
