import { useState } from "react";
import { useTranslation } from "react-i18next";

const NumberSelected = () => {
  const [unit, setUnit] = useState("day");
  const [num, setNum] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <p className="available-to">{t("available_to")} </p>

      <div className="number-select">
        <input
          type="number"
          step={1}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <select onChange={(e) => setUnit(e.target.value)} value={unit}>
          <option value="year">{t("year")}</option>
          <option value="month">{t("month")}</option>
          <option value="day">{t("day")}</option>
        </select>
      </div>
    </>
  );
};

export default NumberSelected;
