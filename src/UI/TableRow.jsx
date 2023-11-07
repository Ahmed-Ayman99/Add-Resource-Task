import { BiMinus, BiPlus } from "react-icons/bi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { useState } from "react";

import { useDirection } from "../context/DirectionContext";
import { holidays } from "../utils/constans";
import CkeckBtn from "./CkeckBtn";
import PickDate from "./PickDate";
import { useTranslation } from "react-i18next";

const TableRow = ({ day }) => {
  const [showStartDropDown, setShowStartDropDown] = useState(false);
  const [showEndDropDown, setShowEndDropDown] = useState(false);
  const { direction } = useDirection();
  const { t } = useTranslation();

  const handleShowDropDown = () => {
    setShowEndDropDown(true);
    setShowStartDropDown(true);
  };

  const handleHideDropDown = () => {
    setShowEndDropDown(false);
    setShowStartDropDown(false);
  };

  const [checked, setChecked] = useState(!holidays.includes(day));

  return (
    <div className="table-row">
      <div className="check-day">
        <CkeckBtn
          onChange={() => setChecked((prev) => !prev)}
          checked={checked}
        />

        <p>{t(day.toLowerCase())}</p>
      </div>

      {checked && (
        <>
          <PickDate
            showDropDown={showStartDropDown}
            setShowDropDown={setShowStartDropDown}
            title="start_time"
            className="start"
            direction={direction}
          />

          <p className="dashed">--</p>

          <PickDate
            showDropDown={showEndDropDown}
            setShowDropDown={setShowEndDropDown}
            className={`end ${direction === "ltr" ? "ltr" : "rtl"}`}
            title="end_time"
            direction={direction}
          />

          <button className="btn plus-icon">
            {showStartDropDown || showEndDropDown ? (
              <BiMinus onClick={handleHideDropDown} />
            ) : (
              <BiPlus onClick={handleShowDropDown} />
            )}
          </button>

          <button className="btn duplicate-icon">
            <HiOutlineDuplicate />
          </button>
        </>
      )}
    </div>
  );
};

export default TableRow;
