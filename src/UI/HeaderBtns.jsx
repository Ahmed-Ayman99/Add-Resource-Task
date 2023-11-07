import { useTranslation } from "react-i18next";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";

import { useDirection } from "../context/DirectionContext";
import useClickOutside from "../hooks/useClickOutside";
import { HiEllipsisVertical } from "react-icons/hi2";

const HeaderBtns = () => {
  const [showList, setShowList] = useState(false);
  const { direction } = useDirection();

  const ref = useClickOutside(() => setShowList(false));
  const { t } = useTranslation();

  return (
    <div ref={ref} className="ellipsis">
      <button
        onClick={() => setShowList((prev) => !prev)}
        className="btn ellipsis-btn"
      >
        <HiEllipsisVertical />
      </button>

      {showList && (
        <ul className={`list ${direction === "rtl" ? "list-rtl" : "list-ltr"}`}>
          <li>
            <button className="btn ellipsis__save-btn">
              {t("save_changes")}
            </button>
          </li>
          <li>
            <button className="btn ellipsis__delete-btn">
              <span>{t("delete")}</span> <BsTrashFill />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderBtns;
