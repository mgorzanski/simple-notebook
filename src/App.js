import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/views/Home';
import Editor from './components/views/Editor';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/new/document" component={Editor} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
