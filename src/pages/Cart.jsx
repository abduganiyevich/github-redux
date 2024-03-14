import React from 'react';
import './cart.css';

function Cart(props) {
  const { title, author, year, language, imageLink, country } = props.data;
  const { click, exist } = props;

  return (
    <div className="card-wrapper">
      <div className="cards">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>{title}</h1>
          <i
            onClick={() => {
              click(props.data, exist);
            }}
            className={`${exist ? 'fa-solid' : 'fa-regular'} fa-star`}
            style={{ color: 'orange', cursor: 'pointer' }}
          ></i>
        </div>
        <p>{author}</p>
        <p>{year}</p>
        <p>{language}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default Cart;
