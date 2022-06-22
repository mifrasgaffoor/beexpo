import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventHome.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import List from "../../components/List";
const EventHome = () => {
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

  return (
    <StudentDefaultLayout>
      <List />
    </StudentDefaultLayout>
  );
};

export default EventHome;
