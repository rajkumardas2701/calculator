import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, handleClick, color, wide = false,
}) {
  return (
    <button type="button" onClick={() => handleClick(name)} className={wide ? 'zeroBtn' : 'otherBtn'} style={{ background: color }}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};
