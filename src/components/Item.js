import React , {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

 
  const handleClick = () => {
    setInCart(!inCart);
  };
  return (
    <li className="">
      <span>name = {name}</span>
      <span className="category">category = {category}</span>
      <button className="add" on onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
