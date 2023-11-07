import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsPlus } from "react-icons/bs";

import { useDirection } from "../context/DirectionContext";

const ResourceInfo = () => {
  const [source, setSource] = useState("./default.jpg");
  const { direction } = useDirection();
  const { t } = useTranslation();
  const ref = useRef();

  useEffect(() => {
    if (typeof source === "string") return;

    ref.current.src = URL.createObjectURL(source);
  }, [source]);

  return (
    <div className="resource-info">
      <figure>
        <img ref={ref} src="./default.jpg" />

        <div className={`plus ${direction === "rtl" ? "right" : ""} `}>
          <input
            onChange={(e) => setSource(e.target.files[0])}
            id="upload-file"
            type="file"
            accept="image/jpeg, image/png, image/jpg,"
          />

          <label htmlFor="upload-file">
            <BsPlus />
          </label>
        </div>
      </figure>

      <div className="resource-name">
        <h3>{t("name")} </h3>
        <input type="text" placeholder={t("name_placeholder")} />
      </div>
    </div>
  );
};

export default ResourceInfo;
