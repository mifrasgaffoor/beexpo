import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import "./PostedEvent.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
const PostedEvent = ({ match }) => {
  const [data, setData] = useState([]);
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

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    },
    buttonsStyling: false,
  });

  async function deleteEvent(deleteid) {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,

        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your record  has been deleted.",
            "success"
          );
          window.location.reload(true);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "your record  is safe :)",
            "error"
          );
        }
      });
    try {
      const det = await axios.delete("/api/event/deleteevent/" + deleteid, {
        _id: deleteid,
      }).date;
      console.log(det);
    } catch (error) {
      console.log(error);
    }
  }

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
  console.log(allbooks.length);
  const eventbooks = allbooks.filter(
    (event) => event.eventid === data._id
  ).length;
  return (
    <div>
      <CompanyDefaultLayout>
        <h1
          style={{
            color: "#0071c2",
            fontWeight: "bold",
          }}
        >
          Summary of Posted Events
        </h1>

        <table>
          <tr>
            <th>Event ID</th>
            <th>Title</th>
            <th>PostedOn</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
          {data.map((event) => {
            return (
              <tr>
                <td>{event._id}</td>
                <td>{event.title}</td>
                <td> {moment(event.createdAt).format("MM-DD-yyyy")}</td>
                <td>{event.category}</td>

                <td>
                  <Link to={`eventedit/${event._id}`}>
                    <BsFillPencilFill />
                  </Link>

                  <Link onClick={{}}>
                    <BsFillTrashFill onClick={() => deleteEvent(event._id)} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </CompanyDefaultLayout>
    </div>
  );
};

export default PostedEvent;
