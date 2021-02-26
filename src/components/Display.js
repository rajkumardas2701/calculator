import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ total, operation, next }) {
  return (
    <div className="display">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Display.defaultProps = {
  total: '0',
  operation: null,
  next: null,
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};
