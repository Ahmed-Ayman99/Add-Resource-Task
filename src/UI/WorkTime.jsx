import { useTranslation } from "react-i18next";

const WorkTime = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="work-time">
      <h2 className="work-time__header">{t("working_hours")}</h2>
      <p className="work-time__text">{t("working_hours_desc")}</p>

      {children}
    </div>
  );
};

export default WorkTime;
