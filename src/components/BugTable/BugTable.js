import React, { Component } from 'react'

class BugTable extends Component {
	render() {
		return (
			<div>
				<h3>Bug Table Component</h3>
				<table>
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
