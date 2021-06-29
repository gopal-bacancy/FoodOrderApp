import classes from './CartItem.module.css';

const CartItem2 = (props) => {
  //const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          {/* <span className={classes.amount}>x {props.amount}</span> */}
        </div>
      </div>
    </li>
  );
};

export default CartItem2;