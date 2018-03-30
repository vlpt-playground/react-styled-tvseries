import React, { Component } from 'react';
import SeriesPage from './pages/SeriesPage';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <SeriesPage data={data} />
    );
  }
}

export default App;