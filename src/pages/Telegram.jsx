// src/components/Page1/Telegram.jsx

import { FiCalendar } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect } from "react";
import styles from "./Telegram.module.scss";
import { FcGraduationCap } from "react-icons/fc";

export default function Telegram2() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://t.me/+KqIw46tJ1zcwYzEy";
    }, 610000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.telegramRoot}>
      <div className="container">
        <div className={styles.calendar}>
          <div className={styles.calendar__left_box}>
            <FiCalendar className={styles.calendarIcon} />
            <div className={styles.calendar__left_text_box}>
              <span className={styles.calendarText}>Kurs sanasi:</span>
              <span className={styles.calendarText}>3–4–5 iyun</span>
            </div>
          </div>

          <div className={styles.calendar__left_box}>
            <FcGraduationCap className={styles.calendarIcon} />
            <div className={styles.calendar__left_text_box}>
              <span className={styles.calendarText}>Boshlanish vaqti:</span>
              <span className={styles.calendarText}>20:00</span>
            </div>
          </div>
        </div>
        <div className={styles.telegram_box}>
          <div className={styles.telegramBox}>
            <h1 className={styles.telegramHeadingWar}>OXIRGI QADAM QOLDI!</h1>
            <h2 className={styles.telegramHeading}>
              Masterklassga qatnashish uchun tugmani bosib kanalga obuna bo’ling
            </h2>
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
    </div>
  );
}
