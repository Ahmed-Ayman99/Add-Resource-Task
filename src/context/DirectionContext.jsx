import { useState } from "react";
import { createContext, useContext } from "react";
import { language } from "../utils/constans";
import Cookies from "js-cookie";

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [direction, setDirection] = useState(() => {
    const currentDir = language.find(
      (l) => l.code === Cookies.get("i18next")
    )?.dir;
    return currentDir || "ltr";
  });

  const contextVals = {
    direction,
    setDirection,
  };

  return (
    <DirectionContext.Provider value={contextVals}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");

  return context;
};
