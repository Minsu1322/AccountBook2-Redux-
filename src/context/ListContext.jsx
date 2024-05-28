import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <ListContext.Provider
      value={{ list, setList, selectedMonth, setSelectedMonth }}
    >
      {children}
    </ListContext.Provider>
  );
};
