import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="groups">
    <div className="G1">
      <Button name="AC" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="+/-" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="%" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="/" handleClick={clickHandler} />
    </div>

    <div className="G2">
      <Button name="7" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="8" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="9" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="*" handleClick={clickHandler} />
    </div>

    <div className="G3">
      <Button name="4" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="5" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="6" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="-" handleClick={clickHandler} />
    </div>

    <div className="G4">
      <Button name="1" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="2" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="3" handleClick={clickHandler} color="#EFEFEF" />
      <Button name="+" handleClick={clickHandler} />
    </div>

    <div className="G5">
      <Button name="0" wide handleClick={clickHandler} color="#EFEFEF" />
      <Button name="." handleClick={clickHandler} color="#EFEFEF" />
      <Button name="=" handleClick={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
