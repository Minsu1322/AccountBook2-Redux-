import React, { useContext, useState } from "react";
import {
  ReceiptStyle,
  ButtonStyle,
  ButtonContainer,
} from "../style/ReceiptStyle";
import { Link } from "react-router-dom";
import { ListContext } from "../context/ListContext";

const Receipt = () => {
  const { list, setList } = useContext(ListContext);
  const { selectedMonth, setSelectedMonth } = useContext(ListContext);
  if (selectedMonth === null) {
    return <div>월을 선택해주세요</div>;
  }

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item !== id);
    setList(updatedList);
    localStorage.setItem("buyList", JSON.stringify(updatedList));
  };

  const filteredList = list.filter((e) => {
    const month = e.date.split("-")[1];
    const formattedMonth = month.startsWith("0") ? month.slice(1) : month;
    return formattedMonth === selectedMonth.toString();
  });

  return (
    <div>
      {console.log(selectedMonth)}
      {console.log(list)}

      {filteredList.map((entry, index) => (
        <ReceiptStyle key={index}>
          {entry.date}
          <br />
          {entry.item} - {entry.price}원 - {entry.content}
          <ButtonContainer>
            <Link to={`/detail/${entry.id}`}>
              <ButtonStyle>상세</ButtonStyle>
            </Link>
            <ButtonStyle onClick={() => handleDelete(entry)}>삭제</ButtonStyle>
          </ButtonContainer>
        </ReceiptStyle>
      ))}
    </div>
  );
};
export default Receipt;
