import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import ProjectCard from "./ProjectCard";
import styles from "./AllProject.module.css";

const AllProject = () => {
  return (
    <div>
      <StudentDefaultLayout>
        <div className={styles.container}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </StudentDefaultLayout>
    </div>
  );
};

export default AllProject;
