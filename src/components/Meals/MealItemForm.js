import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useState, useRef } from "react";
import Alert from "../../Authenticate/Alert";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if (localStorage.getItem("userid")) {
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
      props.onAddToCart(enteredAmountNumber);
    } else props.onAlert();
  };
  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id, //
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>
        {!amountIsValid && <p>Please Enter a Valid Amount (1-5).</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
