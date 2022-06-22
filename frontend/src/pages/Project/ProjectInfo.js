import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styels from "./ProjectInfo.module.css";
const ProjectInfo = () => {
  return (
    <div>
      <StudentDefaultLayout>
        <div className={styels.container}>
          <h1>Details</h1>
          <h3>
            Title : <p>asdjjaksdjklahsdkjahskdj</p>
          </h3>
          <h3>
            Description :{" "}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </h3>
          <h3>
            Technolgies :{" "}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </h3>
          <h3>
            Qulification :{" "}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </h3>
          <h3>
            Catagaries : <p>Web developemt</p>
          </h3>
          <h3>
            Duration : <p>03 months</p>
          </h3>
          <h3>
            Register Before : <p>2022-02-2</p>
          </h3>
          <button className={styels.btn}>Register</button>
        </div>
      </StudentDefaultLayout>
    </div>
  );
};

export default ProjectInfo;
