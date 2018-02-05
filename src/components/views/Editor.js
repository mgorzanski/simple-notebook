import React from 'react';

import HeaderEditor from './../HeaderEditor';
import NotesList from './../NotesList';

import { Form, FormGroup, Label, Input } from 'reactstrap';

class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			body: ''
		};
	}

	handleChange(e) {
		const target = e.target;
		const value = target.value || target.innerHTML;
		const name = target.name || target.dataset.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<React.Fragment>
				<HeaderEditor noteName={this.state.name} noteBody={this.state.body} />
				<main className="main-editor">
					<NotesList />
					<section className="editor">
						<Form>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input type="text" name="name" id="nameInput" onChange={this.handleChange.bind(this)} placeholder="Title of the note..." />
							</FormGroup>
							<FormGroup>
								<div id="form-editor" data-name="body" contentEditable onInput={this.handleChange.bind(this)}>
									
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