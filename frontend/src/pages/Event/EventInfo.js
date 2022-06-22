import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventInfo.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { message } from "antd";

const EventInfo = ({ match }) => {
  const [data, setData] = useState([]);
  const [paydata, setpaydata] = useState([]);
  const [bookdata, setBookdata] = useState([]);
  const [allbooks, setAllbooks] = useState([]);
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

  useEffect(() => {
    fetch("/api/eventbooking/getalleventbookings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllevents = data;
        setAllbooks(getAllevents);
      });
  }, []);

  const companyname = JSON.parse(localStorage.getItem("user"));

  const event = data.find((event) => event._id === match.params.id);
  const eventbooks = allbooks.filter(
    (event) => event.eventid === match.params.id
  ).length;
  console.log(eventbooks);
  console.log(event);

  function bookNow() {
    fetch("/api/eventbooking/bookingevent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.title,
        userid: JSON.parse(localStorage.getItem("user"))._id,
        eventid: event._id,
        category: event.category,
        duedate: event.duedate,
        finaldate: event.finaldate,
        price: event.price,
        breifDescription: event.breifDescription,
        photo: event.photo,
      }),
    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log(dataa);
        setBookdata(dataa);
        message.success("Your Booking Successful go with the payment  process");
      });

    savePayId();
    buyNow();
  }

  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();

  // today = yyyy + "-" + mm + "-" + dd;
  // console.log(today);

  // console.log(bookdata);
  // console.log(paydata);

  async function savePayId() {
    const payidnew = paydata.data.id;
    const bookidid = bookdata._id;
    fetch("/api/savepay/eventpaysave", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payid: payidnew,
        bookid: bookidid,
      }),
    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log(dataa);
        console.log("payment id saved");
      });
  }

  async function buyNow() {
    const amount = event.price;
    const heading = event.title;
    const resp = await axios.get(
      `http://localhost:5000/api/pay/payment/${amount}`
    );

    setpaydata(resp);
    const { data } = resp;
    const payid = data.id;
    console.log(payid);
    const options = {
      key: "rzp_test_uBjkVyh3bjKpHi",
      name: heading,
      description: "Consistency=Success",
      image: event.photo,
      order_id: data.id,
      handler: async (response) => {
        console.log(response);
      },
      theme: {
        color: "#001529",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log(resp);
  }

  return (
    <div>
      <StudentDefaultLayout>
        {event && (
          <div className={styles.container}>
            <div className={styles.image}>
              <h1 className={styles.head}>
                <b className={styles.title}></b>
                {event.title}
              </h1>
              <img src={event.photo} className={styles.imgimg} alt="" />
            </div>

            <h2>
              <b className={styles.title}>Company</b> : {companyname.username}
            </h2>

            <h2>
              <b className={styles.title}>Full Description</b> :{" "}
              {event.fullDescription}
              environments.
            </h2>
            <h2>
              <b className={styles.title}>Price</b> : ${event.price}
            </h2>

            <h2>
              <b className={styles.title}>Time</b> : {event.time}
            </h2>

            <hr />

            <h2>
              <b className={styles.title}>Category</b> :{event.category}
            </h2>

            <h2 className={styles.arrange}>
              <b className={styles.title}>Total books for event</b> :
              <span className={styles.attend}>
                <p>
                  {eventbooks}
                  <span className={styles.attendstu}>students booked</span>
                </p>
              </span>
              <p>
                <b className={styles.title}>Register Before</b> :
                {event.finaldate}
              </p>
            </h2>

            <hr />

            <div className="flex justify-content-between">
              <p>
                <b className={styles.title}>
                  Posted on : {moment(event.createdAt).format("MMM DD yyyy")}
                </b>
              </p>
            </div>
            <br />
            <div className={styles.bbttn}>
              <button className={styles.btnpayhere} onClick={bookNow}>
                <Link
                  // to={`EventPayment/${event._id}`}
                  className="pay"
                >
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        )}
      </StudentDefaultLayout>
    </div>
  );
};

export default EventInfo;
