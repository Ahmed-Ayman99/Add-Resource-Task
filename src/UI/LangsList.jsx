import { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import useClickOutside from "../hooks/useClickOutside";
import { useDirection } from "../context/DirectionContext";
import { ES, SA, US } from "country-flag-icons/react/3x2";
import i18next from "i18next";
import Cookies from "js-cookie";

const LangsList = () => {
  const [showLangs, setShowLangs] = useState(false);
  const { direction, setDirection } = useDirection();
  const ref = useClickOutside(() => setShowLangs(false));
  const currentLangCode = Cookies.get("i18next");

  const handleChangeLng = (code, dir = "ltr") => {
    i18next.changeLanguage(code);
    setDirection(dir);
    setShowLangs(false);
  };
  return (
    <div ref={ref} className="langs">
      <button
        onClick={() => setShowLangs((prev) => !prev)}
        className="btn global-btn"
      >
        <AiOutlineGlobal />
      </button>

      {showLangs && (
        <ul className={`list ${direction === "rtl" ? "list-rtl" : "list-ltr"}`}>
          <li>
            <button
              onClick={() => handleChangeLng("ar", "rtl")}
              className="btn"
              disabled={currentLangCode === "ar"}
            >
              <SA className="flag" />
              العربية
            </button>
          </li>

          <li>
            <button
              className="btn"
              disabled={currentLangCode === "en"}
              onClick={() => handleChangeLng("en")}
            >
              <US title="United States" className="flag" />
              English
            </button>
          </li>

          <li>
            <button
              className="btn "
              disabled={currentLangCode === "sp"}
              onClick={() => handleChangeLng("sp")}
            >
              <ES title="United States" className="flag" />
              España
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangsList;
