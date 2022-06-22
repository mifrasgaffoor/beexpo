import React from "react";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import styles from "./PostProject.module.css";
const { TabPane } = Tabs;
const PostProject = () => {
  return (
    <div>
      <CompanyDefaultLayout>
        <Form layout="vertical" method="post" className={styles.form_form}>
          <h2 className={styles.heading}>Post your project </h2>

          <Row gutter={16}>
            <Col lg={16} sm={24}>
              <div className={styles.divdiv}>
                <label className={styles.select_label} for="role">
                  Title of the Event
                </label>
                <input
                  name="title"
                  type="text"
                  className={styles.input_input}
                />
              </div>
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label} for="role">
                Choose your the date
              </label>
              <input name="date" type="date" className={styles.input_input} />
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label} for="role">
                Price of the Event
              </label>
              <input name="price" type="text" className={styles.input_input} />
            </Col>
            <Col lg={16} sm={24}>
              <label className={styles.select_label} for="role">
                Choose Event Categories
              </label>
              <select className={styles.select_select}>
                <option value="Student">Web Development </option>
                <option value="Company">Mobile Development</option>
                <option value="Mentor">UX/UI Design</option>
                <option value="Student">Data Science</option>
                <option value="Company">Full Stack Development</option>
                <option value="Mentor">Artificial Intelligence</option>
                <option value="Mentor">Machine Learning</option>
              </select>
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label} for="role">
                Price of the Event
              </label>
              <input name="price" type="text" className={styles.input_input} />
            </Col>
            <Col lg={8} sm={24}>
              <label className={styles.select_label} for="role">
                Price of the Event
              </label>
              <input name="price" type="text" className={styles.input_input} />
            </Col>

            <Col lg={8} sm={24}>
              <label className={styles.select_label}>Choose image</label>
              <input type="file" className={styles.input_input} />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <label className={styles.select_label} for="role">
                Type your Brief Describation
              </label>

              <textarea
                name="brief"
                type="text"
                className={styles.text_area}
                rows="9"
              ></textarea>
            </Col>

            <Col lg={24} sm={24}>
              <label className={styles.select_label} for="role">
                Type your Full Describation
              </label>

              <textarea
                name="full"
                type="text"
                className={styles.text_area}
                rows="4"
              ></textarea>
            </Col>
          </Row>

          <button className={styles.button_button}>Post</button>
          <button className={styles.button_button2}>update</button>
        </Form>
      </CompanyDefaultLayout>
    </div>
  );
};

export default PostProject;
