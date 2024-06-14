import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Detailstyle, InputDivWrapper } from "../style/Detailstyle";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/listSlice";
import Navbar from "../components/Navbar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { jsonApi } from "../../api/axios";

const Detail = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [itemName, setItemName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const queryClient = useQueryClient();

  const {
    data: expenses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const response = await jsonApi.get("/expenses");
      return response.data;
    },
  });

  useEffect(() => {
    if (expenses) {
      const foundItem = expenses.find((entry) => entry.id === id);
      if (foundItem) {
        setDate(foundItem.date);
        setItemName(foundItem.item);
        setAmount(foundItem.amount);
        setDescription(foundItem.description);
        setCreatedBy(foundItem.createdBy);
      }
    }
  }, [expenses, id]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  const handleUpdate = async () => {
    const updatedItem = {
      id,
      date,
      item: itemName,
      amount,
      description,
      createdBy,
    };
    await jsonApi.put(`/expenses/${id}`, updatedItem);
    queryClient.invalidateQueries("expenses");
    navigate("/");
  };

  const handleDelete = async () => {
    await jsonApi.delete(`/expenses/${id}`);
    queryClient.invalidateQueries("expenses");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <Detailstyle>
        <InputDivWrapper>
          <label>
            날짜
            <br />
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>
            항목
            <br />
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>
            금액
            <br />
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>
            내용
            <br />
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputDivWrapper>
        <button onClick={handleUpdate}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={() => navigate("/")}>뒤로가기</button>
      </Detailstyle>
    </>
  );
};

export default Detail;
