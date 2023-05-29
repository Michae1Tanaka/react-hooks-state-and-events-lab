import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddItemToCartButton(e) {
    if (addedToCart) {
      setAddedToCart(!addedToCart);
    } else {
      setAddedToCart(!addedToCart);
    }
  }
  return (
    <li className={addedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addedToCart ? "remove" : "add"} onClick={handleAddItemToCartButton}>
        {addedToCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
