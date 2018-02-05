import React from 'react';

import HeaderEditor from './../HeaderEditor';
import NotesList from './../NotesList';

import { Form, FormGroup, Label, Input } from 'reactstrap';

class Editor extends React.Component {
	render() {
		return (
			<React.Fragment>
				<HeaderEditor />
				<main className="main-editor">
					<NotesList />
					<section className="editor">
						<Form>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input type="text" name="name" id="nameInput" placeholder="Title of the note..." />
							</FormGroup>
							<FormGroup>
								<div id="form-editor" contentEditable>
									
								</div>
							</FormGroup>
						</Form>
					</section>
				</main>
			</React.Fragment>
		);
	}
}

export default Editor;