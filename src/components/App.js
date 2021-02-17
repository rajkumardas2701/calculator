/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
