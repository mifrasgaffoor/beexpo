import React from "react";
import AdminDefaultLayout from "../../Layout/AdminDefaultLayout";
import style from "./UserManage.module.css";
const UserManage = () => {
  return (
    <AdminDefaultLayout>
      <div className={style.admin_container}>
        <div className={style.users_card}>
          <div className={style.user_card}>
            <img
              src="https://evolllution.com/wp-content/uploads/2019/08/Vandana-Pawa-Aug-27-SIZED.jpeg"
              alt=""
            />
          </div>
          <div className={style.user_card}></div>
          <div className={style.user_card}></div>
        </div>
      </div>
    </AdminDefaultLayout>
  );
};

export default UserManage;
