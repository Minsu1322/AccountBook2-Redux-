import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Detailstyle } from "../style/Detailstyle";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/listSlice";

const Detail = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

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
    dispatch(addItem(updatedList));
    localStorage.setItem("buyList", JSON.stringify(updatedList));
    navigate("/");
  };

  const handleDelete = () => {
    const updatedList = list.filter((entry) => entry.id !== id);
    dispatch(removeItem(updatedList));
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
        <button onClick={handleUpdate}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={() => navigate("/")}>뒤로가기</button>
      </Detailstyle>
    </>
  );
};

export default Detail;
