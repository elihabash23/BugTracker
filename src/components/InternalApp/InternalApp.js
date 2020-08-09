import React, { Component } from 'react'
import BugTable from '../BugTable/BugTable';
import logo from '../../logo.svg';

class InternalApp extends Component {
	render() {
		if (this.props.authState === "signedIn") {
			return (
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						BugTracker App
					</p>
					<BugTable />
				</div>
			)
		} else {
			return null;
		}
	}
}

export default InternalApp;
