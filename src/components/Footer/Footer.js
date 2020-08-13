import React from 'react'
import { Navbar, Col, Container } from 'react-bootstrap';

let fullYear = new Date().getFullYear();
const Footer = () => {

	return (
		<Navbar fixed="bottom" bg="dark" variant="dark">
			<Container>
				<Col lg={12} className="text-center text-muted">
					<div>{fullYear} - {fullYear+1}, All Rights Reserved by Bugs Incorporated</div>
				</Col>
			</Container>
		</Navbar>
	)
}

export default Footer;
