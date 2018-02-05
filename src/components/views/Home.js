import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header';
import { Card, CardHeader, CardBody, CardText, Jumbotron, Container, ListGroup, ListGroupItem } from 'reactstrap';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<main className="main-home">
					<section className="home">
						<Jumbotron fluid>
							<Container fluid>
								<h1 className="display-3">Simple Notebook</h1>
								<p className="lead">A simple web text editor.</p>
							</Container>
						</Jumbotron>
						<Card className="home__card">
							<CardHeader>Actions</CardHeader>
							<CardBody>
								<CardText className="home__card-text">
									<Link className="btn btn-primary btn-lg" role="button" to="/new/document">New document</Link>
									<Link className="btn btn-secondary btn-lg" role="button" to="/">Open from computer</Link>
								</CardText>
							</CardBody>
						</Card>
						<Card className="home__card">
							<CardHeader>Recent documents</CardHeader>
							<ListGroup>
								<ListGroupItem tag={Link} to="/">Cras justo odio</ListGroupItem>
								<ListGroupItem tag={Link} to="/">Dapibus ac facilisis in</ListGroupItem>
								<ListGroupItem tag={Link} to="/">Morbi leo risus</ListGroupItem>
								<ListGroupItem tag={Link} to="/">Porta ac consectetur ac</ListGroupItem>
								<ListGroupItem tag={Link} to="/">Vestibulum at eros</ListGroupItem>
							</ListGroup>
						</Card>
					</section>
				</main>
			</React.Fragment>
		);
	}
}

export default Home;