import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BookingOptions = () => {
  const [bookingType, setBookingType] = useState("");
  const { t } = useTranslation();

  return (
    <div className="booking-options">
      <p>{t("mulit_booking")} </p>

      <div className="choose-booking">
        <div className="single-service">
          <input
            value="one-person"
            onChange={(e) => setBookingType(e.target.value)}
            name="bookings"
            id="one-person"
            type="radio"
          />

          <label htmlFor="one-person">
            <AiOutlineUser /> <span>{t("one_person")} </span>
          </label>
        </div>

        <div className="multi-service">
          <input
            onChange={(e) => setBookingType(e.target.value)}
            name="bookings"
            value="multi-person"
            id="multi-person"
            type="radio"
          />

          <label htmlFor="multi-person">
            <FiUsers />
            <span>{t("muliti_persons")}</span>
          </label>
        </div>

        {bookingType === "multi-person" && (
          <div className="booking-time">
            <input type="number" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingOptions;
