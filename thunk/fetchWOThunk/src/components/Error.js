import React from 'react';
import PropTypes from "prop-types";

function Error({ message }) {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
}

Error.defaultProps = {
  message: ""
}

Error.propTypes = {
  message: PropTypes.string
}

export default Error;