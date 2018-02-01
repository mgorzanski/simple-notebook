import React from 'react';
import { Collapse, Navbar, Button, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
						<NavbarBrand href="/">Simple Notebook</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto header__nav" navbar>
							<NavItem>
								<NavLink href="">Export</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="">Save and close</NavLink>
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