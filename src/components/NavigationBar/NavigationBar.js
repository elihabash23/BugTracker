import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return (
			// <Navbar bg="dark" variant="dark">
			// 	<Navbar.Brand href="/"><img src="https://image.shutterstock.com/image-vector/cute-ladybug-cartoon-260nw-300613991.jpg" width="25" height="25" alt="brand"></img>NavBar</Navbar.Brand>
			// </Navbar>

			<Navbar bg="dark" variant="dark">
				<Link to={""} className="navbar-brand">
					 <img src="https://image.shutterstock.com/image-vector/cute-ladybug-cartoon-260nw-300613991.jpg" width="25" height="25" alt="brand"></img>Bug Tracker
				</Link>
				<Nav className="mr-auto">
					<Link to={"add"} className="nav-link">Add Bug</Link>
					<Link to={"table"} className="nav-link">Bug Table</Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		)
	}
}

export default NavigationBar;
