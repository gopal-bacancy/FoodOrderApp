import classes from './CartItem.module.css';

const CartItem2 = (props) => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
         
        </div>
      </div>
    </li>
  );
};

export default CartItem2;