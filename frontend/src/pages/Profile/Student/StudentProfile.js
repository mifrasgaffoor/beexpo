import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../../Layout/StudentDefaultLayout";
import styles from "./StudentProfile.module.css";
import { Tabs, Tag } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
const { TabPane } = Tabs;

const StudentProfile = ({ history }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {}, []);
  return (
    <div>
      <StudentDefaultLayout>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Events" key="1">
            <StudentEventsBooking />
          </TabPane>
        </Tabs>
      </StudentDefaultLayout>
    </div>
  );
};

export default StudentProfile;

export const StudentEventsBooking = ({ history }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [eventbooking, setEventBooking] = useState([]);
  async function booking() {
    try {
      const book = await (
        await axios.post("/api/eventbooking/eventbookingBtId", {
          userid: user._id,
        })
      ).data;
      console.log(book);
      setEventBooking(book);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    booking();
  }, []);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    },
    buttonsStyling: false,
  });
  async function cancelBooking(cancelid) {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to cancle  this booking !",
        icon: "warning",
        showCancelButton: true,

        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "cancelled!",
            "Your booking  has been cancelled.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "safe mode",
            "your booking  is safe :)",
            "error"
          );
        }
      });
    try {
      const canceled = await (
        await axios.post("/api/eventbooking/eventbookingCancel", { cancelid })
      ).data;

      window.location.reload(true);
      console.log(canceled);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.bookcardconatiner}>
      {eventbooking &&
        eventbooking.map((books) => {
          return (
            <div className={styles.bookcard} key={books.lenght}>
              <img src={books.photo} className={styles.bookcardimg} alt="" />
              <h2>{books.title}</h2>
              <h3>
                <b className={styles.btag}>BookedId:</b>
                {books._id}
              </h3>
              <h3>
                <b className={styles.btag}>Event will be start:</b>{" "}
                {books.finaldate}
              </h3>
              <h3>
                <b className={styles.btag}>Price :</b> ${books.price}
              </h3>
              <h3>
                {" "}
                <b className={styles.btag}>category :</b> {books.category}
              </h3>
              {/* <p>{diffDays}</p> */}
              <h3 className={styles.bookcartcenter}>
                <b className={styles.btag}>Status :</b>
                <span>
                  {books.status === "booked" ? (
                    <Tag className={styles.bookstatus} color="#008000">
                      Confirmed
                    </Tag>
                  ) : (
                    <Tag color="#FF0000" className={styles.bookstatus}>
                      Cancelled
                    </Tag>
                  )}
                </span>
                <button
                  className={styles.btnbtn}
                  onClick={() => {
                    cancelBooking(books._id);
                  }}
                >
                  Cancel Booking
                </button>
              </h3>
            </div>
          );
        })}
    </div>
  );
};
