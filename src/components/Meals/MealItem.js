import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import Axios from "axios";
import { useContext, useState } from "react";
import Alert from "../../Authenticate/Alert";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const [showalert, setShowAlert] = useState(false);
  const showAlertHandler = () => {
    setShowAlert(true);
  };
  const onClose = () => {
    setShowAlert(false);
  };
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    const data={
      userid: localStorage.getItem("userid"),
      name: props.name,
      amount: amount,
      price: props.price,
    }
    Axios.post("http://localhost:3000/addToCartItems", {
      data
    }).then((response) => {
      
    });
  };

  return (
    <div>
      {showalert && (
        <Alert
          alertMessage={"Please,Login to add item into cart"}
          onClose={onClose}
        ></Alert>
      )}
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm
            onAddToCart={addToCartHandler}
            onAlert={showAlertHandler}
          />
        </div>
      </li>
    </div>
  );
};
export default MealItem;
