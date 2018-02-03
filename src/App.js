import React, { Component } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <NotesList />
          <Editor />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
