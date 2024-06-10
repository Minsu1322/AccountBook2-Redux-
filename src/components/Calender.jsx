import React, { useContext, useState } from "react";
import { CalenderContainer, MonthButton } from "../style/CalenderStyle";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../redux/slices/monthSlice";

const Calender = () => {
  const [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.month.selectedMonth);

  return (
    <CalenderContainer>
      {month.map((mon) => {
        return (
          <MonthButton
            key={mon}
            $isSelected={selectedMonth == mon}
            onClick={() => dispatch(setSelectedMonth(mon))}
          >
            {mon}월
          </MonthButton>
        );
      })}
    </CalenderContainer>
  );
};

export default Calender;
