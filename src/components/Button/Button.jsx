import React from 'react';

function Button(props) {

  function onClick(evt) {
    const { onClick, disabled } = props

    if (!disabled && onClick) {
      props.onClick();
    }
  }

  return (
    <button onClick={() => onClick()} disabled={props.disabled}>
      {props.children ? <>{props.children}</> : null}
    </button>
  );
}

export default Button;
