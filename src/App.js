import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import OrderCart from "./components/Cart/OrderCart";
import Axios from "axios";
import Alert from "./Authenticate/Alert";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [OrderCartIsShown, setOrderCartIsShown] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideOrderedCartHandler = () => {
    setOrderCartIsShown(false);
  };
  const onClose = () => {
    setShowAlert(false);
  };
  const afterLoginHandler = () => {
    setShowAlert(true);
    setAlertMessage("Logged In successfully");
  };
  const afterSignupHandler = () => {
    setShowAlert(true);
    setAlertMessage("Account created successfully");
  };
  const afterLogoutHandler = () => {
    setShowAlert(true);
    setAlertMessage("Logged out successfully");
  };
  const hideCartHandler1 = () => {
    setCartIsShown(false);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
    setShowAlert(true);
    setAlertMessage("Order Submitted");
  };
  const showOrders = () => {
    Axios.post("http://localhost:3000/orderedItems", {
      userid: localStorage.getItem("userid"),
    }).then((response) => {
      setOrderedItems(response.data);
      setOrderCartIsShown(true);
    });
  };

  return (
    <CartProvider>
      {showAlert && (
        <Alert alertMessage={alertMessage} onClose={onClose}></Alert>
      )}
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onClose1={hideCartHandler1} />
      )}
      {OrderCartIsShown && (
        <OrderCart items={orderedItems} onClose={hideOrderedCartHandler} />
      )}
      <Header
        onShowCart={showCartHandler}
        showCart={showOrders}
        afterLogin={afterLoginHandler}
        afterSignup={afterSignupHandler}
        afterLogout={afterLogoutHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
