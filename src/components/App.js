import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     total: '0',
  //     next: null,
  //     operation: null,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = btnName => {
    // const { total, next, operation } = this.state;
    const calData = calculate({ total, next, operation }, btnName);
    // this.setState({
    //   total: calData.total,
    //   next: calData.next,
    //   operation: calData.operation,
    // });

    setTotal(calData.total);
    setNext(calData.next);
    setOperation(calData.operation);
  };

  // render() {
  //   const { next, total, operation } = this.state;
  return (
    <div className="app">
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={btnName => handleClick(btnName)} />
    </div>
  );
};
// }

export default App;
