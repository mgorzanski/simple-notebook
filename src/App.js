import React, { Component } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <NotesList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
