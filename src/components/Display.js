import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="display">
    {total}
    {' '}
    {operation}
    {' '}
    {next}
  </div>
);

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

export default Display;
