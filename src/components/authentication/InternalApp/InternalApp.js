import React, { Component } from 'react'
import BugTable from '../../BugTable/BugTable';
import classes from './InternalApp.module.css';
import logo from '../../../logo.svg';

class InternalApp extends Component {
	render() {
		// if (this.props.authState === "signedIn") {
			return (
				<div>
					<img className={classes.App_logo} src={logo} alt="logo" />
					<p>
						BugTracker App
					</p>
					<BugTable />
				</div>
			)
		// } else {
		// 	return null;
		// }
	}
}

export default InternalApp;
