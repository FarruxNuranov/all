// src/components/Page1/Telegram.jsx

import { FiCalendar } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect } from "react";
import styles from "./Telegram.module.scss";

export default function Telegram() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://t.me/+KqIw46tJ1zcwYzEy';
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.telegramRoot}>
      <div className={styles.container}>
        <div className={styles.calendarBox}>
          <div className={styles.calendar}>
            <FiCalendar className={styles.calendarIcon} />
            <span className={styles.calendarText}>
              Boshlanish vaqti: 3–4–5 iyun | 20:00
            </span>
          </div>
        </div>

        <div className={styles.telegramBox}>
          <h1 className={styles.telegramHeadingWar}>
            OXIRGI QADAM QOLDI!
          </h1>
          <h1 className={styles.telegramHeading}>
            Masterklassga qatnashish uchun tugmani bosib kanalga obuna bo’ling
          </h1>
          <a
            href="https://t.me/+KqIw46tJ1zcwYzEy"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.telegramBtn}`}
          >
            <FaTelegramPlane className={styles.telegramIcon} />
            OBUNA BOʻLISH
          </a>
        </div>
      </div>
    </div>
  );
}
