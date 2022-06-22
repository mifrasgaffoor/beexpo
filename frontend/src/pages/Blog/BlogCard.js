import React from "react";
import { FiTrash2, FiEdit2, FiThumbsUp } from "react-icons/fi";
import styels from "./BlogCard.module.css";
const BlogCard = () => {
  return (
    <div className={styels.container}>
      <div className={styels.card}>
        <div className={styels.card__header}>
          <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className={styels.card__image}
            width="600"
          />
        </div>
        <div className={styels.card__body}>
          <div>
            <span className={styels.tag + " " + styels.tag_blue}>
              Technology
            </span>
            <FiEdit2 />
            <FiTrash2 />
          </div>
          <h4>What's new in 2022 Tech</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div className={styels.card__footer}>
          <div className={styels.user}>
            <div className={styels.user__info}>
              <FiThumbsUp /> <b>10 Likes</b>
              <h5>
                Jane Doe{" "}
                <span>
                  {" "}
                  <small>2h ago</small>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
