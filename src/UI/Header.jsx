import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";

import { useDirection } from "../context/DirectionContext";
import CheckBtn from "./CkeckBtn";
import LangsList from "./LangsList";
import HeaderBtns from "./HeaderBtns";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const { direction } = useDirection();
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="add-resource">
        <button className="btn arrow">
          {direction === "ltr" ? <HiArrowSmLeft /> : <HiArrowSmRight />}
        </button>

        <p>{t("add_resource")}</p>
      </div>

      <div className="resource-actions">
        <div className="toggle">
          <span>{toggle ? t("active") : t("in_active")}</span>

          <CheckBtn
            checked={toggle}
            onChange={() => setToggle((prev) => !prev)}
          />
        </div>

        <HeaderBtns />

        <button className="btn save-btn">{t("save_changes")} </button>
        <button className="btn delete-btn">
          <span>{t("delete")}</span> <BsTrashFill />
        </button>

        <LangsList />
      </div>
    </header>
  );
};

export default Header;
