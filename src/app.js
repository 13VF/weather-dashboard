import React, { Component } from 'react';
import './app.css';

import Add from './components/add/add.component';
import Dashboard from './components/dashboard/dashboard.component';

class App extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">Weather dashboard</h1>
        <Add />
        <Dashboard />
      </main>
    );
  }
}

export default App;
