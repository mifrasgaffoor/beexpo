import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import BlogCard from "./BlogCard";
import styles from "./BlogHomePage.module.css";
const BlogHomePage = () => {
  return (
    <div>
      <StudentDefaultLayout>
        <input
          type="text"
          name="search"
          placeholder="Search.."
          className={styles.search}
        />
        <div className={styles.container}>
          <div className={styles.left}>
            <BlogCard />
            <BlogCard />
          </div>
          <div className={styles.right}>
            <h1 className={styles.head}>Write Your Blog Here</h1>
            <input
              className={styles.hi}
              type="text"
              id="fname"
              name="fname"
              placeholder="title of the blog"
            />
            <select className={styles.hi}>
              <option value="australia">Experince</option>

              <option value="All">ALL</option>
              <option value="Web Development">Web Development </option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Frontend Development">
                Frontend Development{" "}
              </option>
              <option value="Backend  Development">Backend Development</option>
              <option value="UX/UI Design ">UX/UI Design</option>
              <option value="Data Science">Data Science</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
            </select>
            <textarea className={styles.hi + " " + styles.hii}>
              Some text...
            </textarea>
            <input
              type="file"
              id="myFile"
              name="filename"
              className={styles.hi}
            ></input>{" "}
            <br />
            <button>post</button>
          </div>
        </div>
      </StudentDefaultLayout>
    </div>
  );
};

export default BlogHomePage;
