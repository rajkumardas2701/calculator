import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="Groups">
      <div className="G1">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </div>

      <div className="G2">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="*" />
      </div>

      <div className="G3">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>

      <div className="G4">
        <Button name="3" />
        <Button name="2" />
        <Button name="1" />
        <Button name="+" />
      </div>

      <div className="G5">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
