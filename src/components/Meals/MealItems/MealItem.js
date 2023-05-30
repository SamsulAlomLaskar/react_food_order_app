import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealtemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ price, description, name, id }) => {
  const cartCntxt = useContext(CartContext);

  const PRICE = `₹${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCntxt.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{PRICE}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
