import { Fragment, useState } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import HeaderLogin from "./HeaderLogin";
import HeaderLogoutButton from "./HeaderLogoutButton";

import OrderedItems from "./OrderedItems";
const Header = (props) => {
  const [userStatus, setUserStatus] = useState(
    localStorage.getItem("userid") ? true : null
  );

  const onclickLogout = () => {
    setUserStatus(false);
    props.afterLogout();
  };
  const onclickLogin = () => {
    setUserStatus(true);
    props.afterLogin();
  };
  const showOrder = () => {
    props.showCart();
  };
  const afterSignup = () => {
    props.afterSignup();
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton
          onClick={props.onShowCart}
          onHide={props.onHideCart}
        ></HeaderCartButton>

        {!localStorage.getItem("userid") ? (
          <HeaderLogin
            onclose={props.onClose}
            onClick={onclickLogin}
            signUp={afterSignup}
          />
        ) : null}

        {userStatus && <OrderedItems onShowOrderedCart={showOrder} />}
        {userStatus && <HeaderLogoutButton onlogout={onclickLogout} />}
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
