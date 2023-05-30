import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./CartCutton.module.css";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numOfCartItems = cartContext.items.reduce((previousNum, item) => {
    return previousNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default CartButton;
