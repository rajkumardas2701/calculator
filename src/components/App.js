import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = btnName => {
    const calData = calculate({ total, next, operation }, btnName);
    setTotal(calData.total);
    setNext(calData.next);
    setOperation(calData.operation);
  };

  return (
    <div className="app">
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={btnName => handleClick(btnName)} />
    </div>
  );
};

export default App;
