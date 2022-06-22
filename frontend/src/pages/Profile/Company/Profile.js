import React from "react";
import styles from "./Profile.module.css";
import CompanyDefaultLayout from "../../../Layout/CompanyDefaultLayout";
const Profile = () => {
  return (
    <div>
      <CompanyDefaultLayout>
        <div className={styles.profile_container}>
          <div className={styles.profile_left}>
            <img
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt=""
              className={styles.image}
            />

            <h3 className={styles.name}>Mifas Gaffoor</h3>
          </div>
          <div className={styles.profile_right}>
            <div>
              <h3 className={styles.heading}>Public profile</h3>
            </div>
            <div className={styles.concon}>
              <label for="nameofCompany">Name of Company</label>

              <input
                type="text"
                name="nameofthecompany"
                placeholder="Company name.."
                className={styles.input_input}
              />

              <label for="lname">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your user name of the company"
                className={styles.input_input}
              />

              <label for="lname">Email</label>
              <input
                type="text"
                name="lastname"
                placeholder="Email"
                className={styles.input_input}
              />

              <label for="lname">Website</label>
              <input
                type="text"
                name="website"
                placeholder="webister link..."
                className={styles.input_input}
              />

              <label for="lname">contact no</label>
              <input
                type="text"
                name="contactno"
                placeholder="contact number.."
                className={styles.input_input}
              />

              <label for="subject">Address</label>
              <textarea
                name="address"
                placeholder="Enter the Address"
                className={styles.input_input}
              ></textarea>

              <input type="submit" value="Submit" className={styles.submit} />
            </div>
          </div>
        </div>
      </CompanyDefaultLayout>
    </div>
  );
};

export default Profile;
