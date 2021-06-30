import classes from "./HeaderCartButton.module.css";

const OrderedItems = (props) => {
  const orderedItemsHandler = () => {
    props.onShowOrderedCart();
  };

  return (
    <button className={classes.button} onClick={orderedItemsHandler}>
      OrderedItems
    </button>
  );
};

export default OrderedItems;
