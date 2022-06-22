import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
const ProjectCard = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Payment system</h2>
        <h3 className={styles.posted}>Posted By : 99X </h3>
        <p className={styles.descp}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <h4>Posted on : 2022-09-12</h4>
        <button className={styles.btn}>
          {" "}
          <Link to="ProjectInfo"> Click more</Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
