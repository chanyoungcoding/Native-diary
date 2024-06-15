import React, { useContext } from "react";

export const DBcontext = React.createContext();

export const useDB = () => {
  return useContext(DBcontext);
}