import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUndo, faRedo, faPrint, faUnderline, faItalic, faBold } from '@fortawesome/fontawesome-free-solid';

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
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>Share link</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<NavLink href="">Export</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="">Save and close</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Navbar>

					<Nav pills className="header__format-nav">
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faUndo} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faRedo} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faPrint} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faBold} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faItalic} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faUnderline} /></NavLink>
						</NavItem>
					</Nav>
				</header>
			</React.Fragment>
		);
	}
}

export default Header;