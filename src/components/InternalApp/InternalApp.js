import React, { Component } from 'react'
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
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default InternalApp;
