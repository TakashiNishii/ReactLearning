import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.error(
      "useTitleColorContext must be used within a TitleColorContextProvider"
    );
  }

  return context;
};
