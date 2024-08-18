import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(prevStatus => !prevStatus);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button onClick={toggleCartStatus}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
