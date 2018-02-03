import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Editor extends React.Component {
	render() {
		return (
			<React.Fragment>
				<section className="editor">
					<Form>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input type="text" name="name" id="nameInput" placeholder="Title of the note..." />
						</FormGroup>
						<FormGroup>
							<Input type="textarea" name="body" id="bodyInput" />
						</FormGroup>
						<Button>Submit</Button>
					</Form>
				</section>
			</React.Fragment>
		);
	}
}

export default Editor;