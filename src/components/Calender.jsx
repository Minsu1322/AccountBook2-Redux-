import React, { useContext, useState } from "react";
import { CalenderContainer, MonthButton } from "../style/CalenderStyle";
import { ListContext } from "../context/ListContext";

const Calender = () => {
  const [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const { selectedMonth, setSelectedMonth } = useContext(ListContext);

  return (
    <CalenderContainer>
      {month.map((mon) => {
        return (
          <MonthButton
            key={mon}
            $isSelected={selectedMonth == mon}
            onClick={() => setSelectedMonth(mon)}
          >
            {mon}월
          </MonthButton>
        );
      })}
    </CalenderContainer>
  );
};

export default Calender;
