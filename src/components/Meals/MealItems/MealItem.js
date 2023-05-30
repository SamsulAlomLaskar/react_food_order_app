import classes from "./MealItem.module.css";
import MealItemForm from "./MealtemForm";

const MealItem = ({ price, description, name }) => {
  const PRICE = `₹${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{PRICE}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
