import "./Alert.css";
import Modal from "../../src/components/UI/Modal";

const Alert = (props) => {
  let alertMessage = props.alertMessage;

  return (
    <Modal onClose={props.onClose}>
      <section className="summary">
        <h3 style={{ color: "brown", fontFamily: "initial" }}>
          {alertMessage}
        </h3>
      </section>
    </Modal>
  );
};

export default Alert;
