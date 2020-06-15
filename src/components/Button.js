import React from 'react';
import './button.scss';

const Button = props => {
  const { text, style, onClick } = props;

  return (
    <button className="button" onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
