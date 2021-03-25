import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import NavBar from '../layouts/NavBar';

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = btnName => {
    Number(total);
    const calData = calculate({ total, next, operation }, btnName);
    setTotal(calData.total);
    setNext(calData.next);
    setOperation(calData.operation);
  };

  return (
    <div className="AppBody">
      <NavBar />
      <div id="calSection">
        <h3>Let’s do some math!</h3>
        <div className="app">
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel clickHandler={btnName => handleClick(btnName)} />
        </div>
      </div>
    </div>
  );
};

export default App;
