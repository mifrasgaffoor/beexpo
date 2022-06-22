import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import styles from "./PostEvent.module.css";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import { Row, Col, Form } from "antd";
import { message } from "antd";

function PostEvent({ history }) {
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const [title, setTitle] = useState("");
  const [duedate, setDate] = useState("");
  const [finaldate, setFinaldate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategories] = useState("");
  const [breifDescription, setBreifDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [url, setUrl] = useState("");

  const FetchPostEventData = () => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "be-expo");
    data.append("cloud_name", "beexpo1");
    fetch("https://api.cloudinary.com/v1_1/beexpo1/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(url);
    fetch("api/event/postevent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title,
        duedate,
        finaldate,
        time,
        price,
        category,
        fullDescription,
        breifDescription,
        postedBy: JSON.parse(localStorage.getItem("user")).username.toString,
        pic: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg) {
          message.success(data.msg);
          history.push("/postedevent");
        } else {
          message.error(data.error);
        }
      });
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  console.log({
    title,
    photo,
    duedate,
    finaldate,
    time,
    fullDescription,
    breifDescription,
    category,
    url,
  });

  return (
    <div>
      <CompanyDefaultLayout>
        <Form layout="vertical" method="post" className={styles.form_form}>
          <h2 className={styles.heading}>Publish Your Event Today !</h2>

          <Row gutter={16}>
            <Col lg={8} sm={24}>
              <div className={styles.divdiv}>
                <label className={styles.select_label} for="role">
                  Title of the Event Going to contact
                </label>
                <input
                  value={title}
                  name="title"
                  type="text"
                  className={styles.input_input}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label}>
                Date of Event Going to Happen
              </label>
              <input
                value={duedate}
                name="date"
                type="date"
                min={disablePastDate()}
                className={styles.input_input}
                onChange={(e) => setDate(e.target.value)}
              />
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label}>Register before</label>
              <input
                value={finaldate}
                name="date"
                type="date"
                min={disablePastDate()}
                className={styles.input_input}
                onChange={(e) => setFinaldate(e.target.value)}
              />
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label}>
                Choose your the time
              </label>
              <input
                name="time"
                value={time}
                type="time"
                className={styles.input_input}
                onChange={(e) => setTime(e.target.value)}
              />
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label}>Price of the Event</label>

              <CurrencyFormat
                thousandSeparator={true}
                name="price"
                value={price}
                placeholder="$2000"
                className={styles.input_input}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
            <Col lg={8} sm={24}>
              <label className={styles.select_label}>
                Choose Event Categories
              </label>
              <select
                className={styles.select_select}
                onChange={(e) => setCategories(e.target.value)}
                value={category}
              >
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
            </Col>
            <Col lg={8} sm={24}>
              <label className={styles.select_label}>Upload Image/Banner</label>
              <input
                type="file"
                className={styles.input_input}
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </Col>
            <Col lg={24} sm={24}>
              <label className={styles.select_label} for="role">
                Type your Brief Describation
              </label>

              <textarea
                name="brief"
                value={breifDescription}
                type="text"
                className={styles.text_area}
                onChange={(e) => setBreifDescription(e.target.value)}
                rows="9"
              ></textarea>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <label className={styles.select_label}>
                Type your Full Describation
              </label>

              <textarea
                name="full"
                value={fullDescription}
                type="text"
                className={styles.text_area}
                rows="4"
                onChange={(e) => setFullDescription(e.target.value)}
              ></textarea>
            </Col>
          </Row>

          <button
            className={styles.button_button}
            onClick={() => FetchPostEventData()}
          >
            Post
          </button>
        </Form>
      </CompanyDefaultLayout>
    </div>
  );
}

export default PostEvent;
