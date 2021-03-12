import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="groups">
      <div className="G1">
        <Button name="AC" handleClick={clickHandler} />
        <Button name="+/-" handleClick={clickHandler} />
        <Button name="%" handleClick={clickHandler} />
        <Button name="/" handleClick={clickHandler} />
      </div>

      <div className="G2">
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="*" handleClick={clickHandler} />
      </div>

      <div className="G3">
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" handleClick={clickHandler} />
      </div>

      <div className="G4">
        <Button name="1" handleClick={clickHandler} />
        <Button name="2" handleClick={clickHandler} />
        <Button name="3" handleClick={clickHandler} />
        <Button name="+" handleClick={clickHandler} />
      </div>

      <div className="G5">
        <Button name="0" handleClick={clickHandler} />
        <Button name="." handleClick={clickHandler} />
        <Button name="=" handleClick={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
