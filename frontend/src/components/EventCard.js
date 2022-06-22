import "../components/EventCard.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const EventCard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [duplicate, setDuplicate] = useState([]);
  const [all, setAll] = useState("all");
  const [type, setType] = useState("");
  const [eventDate, seteEventDate] = useState("");
  useEffect(() => {
    fetch("/api/event/getallevents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setDuplicate(data);
      });
  }, []);

  console.log(duplicate);

  function fillterBySerach() {
    const temp = data.filter((event) => event.title.includes(search));
    setData(temp);
  }

  // function fillterByDate() {
  //   const temp = data.filter((event) => event.duedate.includes(eventDate));
  //   setData(temp);
  // }

  function FillterByCat(e) {
    const temp = data.filter((event) => event.category === e);
    setData(temp);
  }
  return (
    <>
      <div className="filltering">
        {/* <input
          type="date"
          className="input"
          value={eventDate}
          onChange={(e) => {
            seteEventDate(e.target.value);
          }}
          onKeyUp={fillterByDate}
        /> */}
        <input
          type="text"
          placeholder="search by title"
          className="input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={fillterBySerach}
        />
        <select
          className="input"
          value={type}
          onChange={(e) => {
            FillterByCat(e.target.value);
          }}
        >
          <option>ALL</option>
          <option>Web Development </option>
          <option>Frontend Development </option>
          <option>Backend Development </option>
          <option>Quality Assurance </option>
          <option>Mobile Development</option>
          <option>UX/UI Design</option>
          <option>Data Science</option>
          <option>Full Stack Development</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Business Analyst</option>
        </select>
      </div>
      {data.map((event) => {
        return (
          <div className="searchItem">
            <img src={event.photo} alt="" className="siImg" />
            <div className="Desc">
              <h1 className="Title">{event.title}</h1>
              <span className="qoutes">
                grow your knowledge with new trending technologies{" "}
              </span>
              <span className="eventdate">
                <b>
                  Event will be start on :
                  {moment(event.finaldate).format("MMM DD yyyy")}
                </b>
                <br />
              </span>
              <span className="Subtitles">{event.breifDescription}</span>

              <span className="cancels">free cancellation </span>
              <span className="cancel">
                You can cancel later, so lock in this great price today!
              </span>
            </div>
            <div className="Details">
              <div className="price">
                <span className="siPrice">${event.price}</span>
              </div>
              <div className="DetailTexts">
                <div className="cat">
                  {" "}
                  <span className="smalldec">{event.category}</span>
                </div>
                <button className="siCheckButton">
                  <Link to={`eventinfo/${event._id}`}>Click to see more</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCard;
