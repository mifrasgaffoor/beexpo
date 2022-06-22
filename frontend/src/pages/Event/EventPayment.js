import React, { useEffect, useState } from "react";
import styles from "./EventPayment.module.css";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const EventPayment = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/event/getallevents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllevents = data;
        setData(getAllevents);
      });
  }, []);

  const event = data.find((event) => event._id === match.params.id);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: event.price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <div className={styles.paymentContainer}>
      {event && (
        <div className={styles.concon}>
          <h2 className={styles.title}>Register and purchase</h2>

          <h3>
            <b>Title : </b> {event.title}
          </h3>

          <h3>
            <b>Price : </b>
            {event.price}
          </h3>
          <label for="lname">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your user name"
            className={styles.input_input}
          />

          <label for="lname">Email</label>
          <input
            type="text"
            name="lastname"
            placeholder="Email"
            className={styles.input_input}
          />

          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      )}
    </div>
  );
};

export default EventPayment;
