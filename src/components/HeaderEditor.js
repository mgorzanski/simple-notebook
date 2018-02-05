import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUndo, faRedo, faPrint, faUnderline, faItalic, faBold } from '@fortawesome/fontawesome-free-solid';
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

	handleClick(e) {
		document.execCommand(e.target.getAttribute('data-command'), false, null);
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
							<NavLink href="#" data-command="undo" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faUndo} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" data-command="redo" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faRedo} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=""><FontAwesomeIcon icon={faPrint} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" data-command="bold" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faBold} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" data-command="italic" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faItalic} /></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" data-command="underline" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faUnderline} /></NavLink>
						</NavItem>
					</Nav>
				</header>
			</React.Fragment>
		);
	}
}

export default Header;