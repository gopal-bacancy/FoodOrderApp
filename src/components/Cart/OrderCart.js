import CartItem2 from "./CartItem2";
import { useEffect } from "react";
import Modal from "../UI/Modal";
import Axios from "axios";
import classes from "./Cart.module.css";
const OrderCart = (props) => {
  //const [orderedItems, setOrderedItems] = useState([]);
  
  const items=props.items;

  // const cartItemRemoveHandler = (name) => {
  //   const p = {
  //     name:name,
  //     userid: localStorage.getItem("userid"),
  //   };

  //   Axios.post("http://localhost:3000/deleteOrderedItems", { p }).then(
  //     (response) => {
  //       if (response.data.deleted === true) {
  //         console.log("deleted");
  //       } else {
  //         console.log("not deleted");
  //       }
  //     }
  //   );
  // };
    
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem2
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        
          //   onAdd={cartItemAddHandler.bind(null, item)}
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
