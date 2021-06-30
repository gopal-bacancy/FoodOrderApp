import CartItem2 from "./CartItem2";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const OrderCart = (props) => {
  const items = props.items;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem2
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>{}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default OrderCart;
