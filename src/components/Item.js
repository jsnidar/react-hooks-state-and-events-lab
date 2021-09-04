import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, addToCart ] = useState("")


  function handleAddToCartClick () {
    return addToCart(inCart => inCart = 'in-cart') 
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
