import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<React.Fragment>
				<header className="header">
					<Navbar color="light" light className="header__navbar" expand="md">
						<NavbarBrand tag={Link} to="/">Simple Notebook</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto header__nav" navbar>
							<NavItem>
								<NavLink href="">Preferences</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="">Account</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="">Logout</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Navbar>
				</header>
			</React.Fragment>
		);
	}
}

export default Header;