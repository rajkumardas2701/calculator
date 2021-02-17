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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    const calData = calculate({ total, next, operation }, btnName);
    this.setState({
      total: calData.total,
      next: calData.next,
      operation: calData.operation,
    });
  }

  render() {
    return (
      <div className="app">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={btnName => this.handleClick(btnName)} />
      </div>
    );
  }
}
