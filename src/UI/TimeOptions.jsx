import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const TimeOptions = () => {
  const [resourceTime, setResourceTime] = useState("");
  const [time, setTime] = useState(0);
  const { t } = useTranslation();

  const minute = time % 60;
  const hour = Math.floor(time / 60);

  const increaseTime = () => setTime((prev) => prev + 1);

  const decreaseTime = () => {
    if (time === 0) return;
    setTime((prev) => prev - 1);
  };

  return (
    <>
      <p className="time-text">{t("resource_time")}</p>
      <div className="time-options">
        <div className="time-option">
          <input
            value="service-time"
            onChange={(e) => setResourceTime(e.target.value)}
            name="time"
            id="service-time"
            type="radio"
          />

          <label htmlFor="service-time">
            <AiOutlineCodeSandbox />
            <span>{t("service_time")}</span>
          </label>
        </div>

        <div className="resevation-option">
          <input
            onChange={(e) => setResourceTime(e.target.value)}
            value="fixed-time"
            name="time"
            id="fixed-time"
            type="radio"
          />

          <label htmlFor="fixed-time">
            <BiTimeFive />
            <span>{t("fixed_time")} </span>
          </label>
        </div>

        {resourceTime === "fixed-time" && (
          <div className="time">
            <button onClick={decreaseTime} className="btn">
              -
            </button>
            <p>
              <span>
                {hour > 0 ? `${hour < 12 ? "0" + hour : hour} :` : null}
              </span>
              <span>{minute < 10 ? "0" + minute : minute} </span>
            </p>
            <button onClick={increaseTime} className="btn">
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TimeOptions;
