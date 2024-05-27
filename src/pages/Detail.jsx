import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Detailstyle } from "../style/Detailstyle";
import {
  ReceiptStyle,
  ButtonStyle,
  ButtonContainer,
} from "../style/ReceiptStyle";

const Detail = ({ list, setList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [date, setDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const foundItem = list.find((entry) => entry.id === id);
    if (foundItem) {
      setItem(foundItem);
      setDate(foundItem.date);
      setItemName(foundItem.item);
      setPrice(foundItem.price);
      setContent(foundItem.content);
    }
  }, [list, id]);

  if (!item) {
    return <div>항목을 찾을 수 없습니다.</div>;
  }

  const handleUpdate = () => {
    const updatedList = list.map((entry) =>
      entry.id === id
        ? { ...entry, date, item: itemName, price, content }
        : entry
    );
    setList(updatedList);
    localStorage.setItem("buyList", JSON.stringify(updatedList));
    navigate("/");
  };

  const handleDelete = () => {
    const updatedList = list.filter((entry) => entry.id !== id);
    setList(updatedList);
    localStorage.setItem("buyList", JSON.stringify(updatedList));
    navigate("/");
  };

  return (
    <>
      <Detailstyle>
        <div>
          <label>
            날짜
            <br />
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>
            항목
            <br />
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label>
            금액
            <br />
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>
            내용
            <br />
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <ButtonStyle onClick={handleUpdate}>수정</ButtonStyle>
          <ButtonStyle onClick={handleDelete}>삭제</ButtonStyle>
          <ButtonStyle onClick={() => navigate("/")}>뒤로가기</ButtonStyle>
        </ButtonContainer>
      </Detailstyle>
    </>
  );
};

export default Detail;
