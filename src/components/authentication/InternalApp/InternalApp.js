import React, { Component } from 'react'
import { Auth } from 'aws-amplify';
import logo from '../../../logo.svg';

class InternalApp extends Component {

	handleSignOut = (e) => {
		e.preventDefault();
		Auth.signOut();
	}

	render() {
		if (this.props.authState === 'signedIn') {
			return (
				<div>
					<img src={logo} className='App-logo' alt='logo' />
					<p>Internal Application begind login</p>
					<button 
						type="submit"
						onClick={this.handleSignOut}
					>
						Sign Out
					</button>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default InternalApp;
