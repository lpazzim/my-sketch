import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className="card-container">
      {props.children ? <>{props.children}</> : null}
    </div>
  );
}

export default Card;
