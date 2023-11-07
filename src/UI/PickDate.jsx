import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import useClickOutside from "../hooks/useClickOutside";
import { useDirection } from "../context/DirectionContext";
import { useTranslation } from "react-i18next";

const PickDate = ({ showDropDown, setShowDropDown, title, className }) => {
  const onClicks = () => setShowDropDown(false);
  const ref = useClickOutside(onClicks);
  const { direction } = useDirection();
  const { t } = useTranslation();

  const hours = ["9", "10", "11", "12", "13", "14", "15"];
  const minutes = ["30", "35", "40", "45", "50", "55", "00"];

  const [minut, setMinut] = useState(30);
  const [hour, setHour] = useState(9);

  const AMPM = hour >= 12 ? "PM" : "AM";
  const editedHour =
    hour % 12 <= 9 && hour % 12 !== 0
      ? `0${hour % 12}`
      : hour % 12 !== "0"
      ? hour
      : "12";

  const inputVal = `${editedHour}:${minut} ${AMPM}`;

  const handleCurrentTime = () => {
    setMinut(new Date().getMinutes());
    setHour(new Date().getHours());
    setShowDropDown(false);
  };

  return (
    <div className={`start-time ${className}`}>
      <p>{t(title)}</p>

      <div className="text-container">
        <input type="text" value={inputVal} disabled />
        <button
          onClick={() => setShowDropDown((prev) => !prev)}
          className={`btn `}
        >
          <BiTimeFive
            className={`timer-icon ${direction === "rtl" ? "left" : ""}`}
          />
        </button>
      </div>

      {showDropDown && (
        <div ref={ref} className="time-picker">
          <div className="picker-columns">
            <div>
              <h5>{t("hours")}</h5>

              <ul className="list">
                {hours.map((item, ind) => (
                  <li key={ind}>
                    <button
                      className={`btn num-pick ${
                        +item === +hour ? "num-pick__active" : ""
                      }`}
                      onClick={() => setHour(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5>{t("minutes")} </h5>

              <ul className="list">
                {minutes.map((item, ind) => (
                  <li key={ind}>
                    <button
                      className={`btn num-pick ${
                        +item === +minut ? "num-pick__active" : ""
                      }`}
                      onClick={() => setMinut(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="timer-btns">
            <button
              onClick={() => setShowDropDown(false)}
              className="btn save-btn"
            >
              {t("save_time")}
            </button>
            <button onClick={handleCurrentTime} className="btn current-btn">
              {t("current_time")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickDate;
