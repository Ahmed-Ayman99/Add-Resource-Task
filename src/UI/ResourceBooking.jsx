import { useTranslation } from "react-i18next";

const ResourceBooking = () => {
  const { t } = useTranslation();

  return (
    <div className="resource-booking">
      <p>{t("type_resource")} </p>

      <div className="booking-day">
        <input name="booking" id="day" type="radio" />
        <label htmlFor="day"></label>
        <label htmlFor="day">{t("book_day")}</label>
      </div>

      <div className="booking-days">
        <input name="booking" id="days" type="radio" />
        <label htmlFor="days"></label>
        <label htmlFor="days">{t("book_more_day")}</label>
      </div>
    </div>
  );
};

export default ResourceBooking;
