import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import JobCard from "./JobCard";
import { BsSearch } from "react-icons/bs";

import style from "./Seacrh.module.css";
const AllJobs = () => {
  return (
    <div>
      <StudentDefaultLayout>
        <div className={style.example}>
          <input type="text" placeholder="Search.." name="search2" />
          <button className={style.btn} type="submit">
            <BsSearch />
          </button>
        </div>
        <JobCard />
      </StudentDefaultLayout>
    </div>
  );
};

export default AllJobs;
