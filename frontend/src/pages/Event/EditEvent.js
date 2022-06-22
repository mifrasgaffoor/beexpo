import React, { useState, useEffect } from "react";
import styles from "./PostEvent.module.css";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import { Row, Col, Form } from "antd";
import { message } from "antd";

function EditEvent({ match, history }) {
  const idid = match.params.id;
  console.log(idid);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/event/singleEvent/${idid}`, {})
      .then((response) => {
        return response.json();
      })
      .then((singledata) => {
        const singleevent = singledata;
        setData(singleevent);
      });
  }, []);

  console.log(data);

  const [title, setTitle] = useState();
  const [duedate, setDate] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState();
  const [category, setCategories] = useState();
  const [breifDescription, setBreifDescription] = useState();
  const [fullDescription, setFullDescription] = useState();
  const [finaldate, setFinaldate] = useState("");
  const fetchUpdate = () => {
    fetch(`/api/event/editevent/${idid}`, {
      method: "PUT",
      body: JSON.stringify({
        _id: idid,
        title: title,
        duedate: duedate,
        time: time,
        price: price,
        category: category,
        photo: photo,
        breifDescription: breifDescription,
        fullDescription: fullDescription,
        finaldate: finaldate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        message.success("Event Edited Successfully");
        history.push("/postedevent");
      });
  };

  function handleChange(e) {
    console.log("new value", e.target.value);
    setTitle(e.target.value);
    setTime(e.target.value);
  }
  return (
    <div>
      <CompanyDefaultLayout>
        {
          <Form layout="vertical" method="post" className={styles.form_form}>
            <h2 className={styles.heading}>Edit your post</h2>

            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <div className={styles.divdiv}>
                  <label className={styles.select_label} f>
                    Title of the Event
                  </label>
                  <input
                    defaultValue={data.title}
                    name="title"
                    type="text"
                    className={styles.input_input}
                    onChange={handleChange}
                  />
                </div>
              </Col>

              <Col lg={8} sm={24}>
                <label className={styles.select_label}>
                  Choose your the date
                </label>
                <input
                  defaultValue={data.duedate}
                  name="date"
                  type="date"
                  className={styles.input_input}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Col>
              <Col lg={8} sm={24}>
                <label className={styles.select_label}>Register before</label>
                <input
                  value={data.finaldate}
                  name="date"
                  type="date"
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
                  defaultValue={data.time}
                  type="time"
                  className={styles.input_input}
                  onChange={handleChange}
                />
              </Col>

              <Col lg={8} sm={24}>
                <label className={styles.select_label}>
                  Price of the Event
                </label>
                <input
                  name="price"
                  defaultValue={data.price}
                  type="text"
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
                  defaultValue={data.category}
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
                <label className={styles.select_label}>Choose image</label>
                <input
                  defaultValue={data.photo}
                  type="text"
                  className={styles.input_input}
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col lg={24} sm={24}>
                <label className={styles.select_label}>
                  Type your Brief Describation
                </label>

                <textarea
                  name="brief"
                  defaultValue={data.breifDescription}
                  type="text"
                  className={styles.text_area}
                  onChange={(e) => setBreifDescription(e.target.value)}
                  rows={7}
                ></textarea>
              </Col>

              <Col lg={24} sm={24}>
                <label className={styles.select_label}>
                  Type your Full Describation
                </label>

                <textarea
                  name="full"
                  defaultValue={data.fullDescription}
                  type="text"
                  className={styles.text_area}
                  rows="4"
                  onChange={(e) => setFullDescription(e.target.value)}
                ></textarea>
              </Col>
            </Row>

            <button className={styles.button_button} onClick={fetchUpdate}>
              Update
            </button>
          </Form>
        }
      </CompanyDefaultLayout>
    </div>
  );
}

export default EditEvent;
