// src/components/LandingPage.jsx

import React, { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import { FcGraduationCap } from "react-icons/fc";


import styles from "./LandingPage2.module.scss";
import { mobileBg } from "../../utils/getImg";
import Modal from "./Modal2";
import Modal2 from "./Modal2";

export default function LandingPage2() {
  // 1) Таймер на 60 секунд
  const [timeLeft, setTimeLeft] = useState(60);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setModalOpen(true);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Календарь */}
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

          {/* Мобильный заголовок */}
          <div className={styles.title__mobile_box}>
            <h1 className={styles.title__mobile_title}>
              Erni suyukli erkatoyiga aylanib - sevgi, sovg`a va baraka to`la
              oila sohibasi bo`ling!
            </h1>
            <h2 className={styles.title__mobile_text}>
              Bu bilimlarni Iman Akhmedovnaning 3 kunlik master klassida
              o’rganib oling.
            </h2>
          </div>

          {/* Мобильное изображение + кнопки */}
          <div className={styles.mobile__img}>
            <img src={mobileBg} alt="" className={styles.avatar} />
            <div className={styles.btn__box}>
              <button
                className={styles.btn_mobile}
                onClick={() => setModalOpen(true)}
              >
                BEPUL QATNASHISH
              </button>
              <div className={styles.timerCard_btn}>
                <div className={styles.timer}>
                  <div className={styles.timeBlock}>
                    <div className={styles.timeValue}>{mm}</div>
                    <div className={styles.timeLabel}>daqiqa</div>
                  </div>
                  <div className={styles.timeBlock}>
                    <div className={styles.timeValue}>{ss}</div>
                    <div className={styles.timeLabel}>soniya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Десктопная колонка слева */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              Erni suyukli erkatoyiga aylanib - sevgi, sovg`a va baraka to`la
              oila sohibasi bo`ling!
            </h2>
            <h2 className={styles.title}>
              Bu bilimlarni Iman Akhmedovnaning 3 kunlik master klassida
              o’rganib oling.
            </h2>
            <p className={styles.desc}>
              3 kechalik BEPUL masterklassda quyidagilarni bilib olasiz:
            </p>
            <ul className={styles.list}>
              <li>
                Saodatli nikohga erishish uchun qo‘rq­uv va vohimalardan xalos
                bo‘lish
              </li>
              <li>
                Xayr­li turmush so‘rash, erni moliyaviy barakasini oshirish
                uchun 5 ta texnika
              </li>
              <li>
                Er-xotin munosabatlari yomonlashuvi, 3-shaxslar aralashuvi va
                xiyonat sabablari
              </li>
            </ul>
            <div className={styles.btn__box}>
              <button
                className={styles.btn}
                onClick={() => setModalOpen(true)}
              >
                BEPUL QATNASHISH
              </button>
              <div className={styles.timerCard}>
                <div className={styles.timer}>
                  <div className={styles.timeBlock}>
                    <div className={styles.timeValue}>{mm}</div>
                    <div className={styles.timeLabel}>daqiqa</div>
                  </div>
                  <div className={styles.timeBlock}>
                    <div className={styles.timeValue}>{ss}</div>
                    <div className={styles.timeLabel}>soniya</div>
                  </div>
                </div>
              </div>
              <p className={styles.timerText}>
                Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
              </p>
            </div>
          </div>

          {/* Модалка */}
          <Modal2
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
