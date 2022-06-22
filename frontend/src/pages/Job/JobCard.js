import React from "react";
import styles from "./JobCard.module.css";
const JobCard = () => {
  return (
    <div>
      <div className={styles.main}>
        <ul className={styles.cards}>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.cards}>
              <div className={styles.card_image}>
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className={styles.btn_card_btn}>Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <h3 class="made_by">Made with ♡</h3>
    </div>
  );
};

export default JobCard;
