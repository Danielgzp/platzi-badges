import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">{props.error.message} se cago estooo</div>;
}

export default PageError;
