import React, { useEffect, useState } from "react";
import { InputFormStyle } from "../style/InputFormStyle";
import Receipt from "./Receipt";
import Calender from "./Calender";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setList } from "../redux/slices/listSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { authApi, jsonApi } from "./../../api/axios";

const InputForm = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken");
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AccessToken}`,
            },
          }
        );
        setUserId(response.data.id);
        setNickname(response.data.nickname);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUser();

    const storedList = localStorage.getItem("buyList");
    if (storedList) {
      dispatch(setList(JSON.parse(storedList)));
    }
  }, [dispatch]);

  const buyList = {
    date,
    item,
    amount,
    description,
    createdBy: nickname,
    userId,
    id: uuidv4(),
  };

  const addExpenses = async (newExpenses) => {
    await jsonApi.post("/expenses", newExpenses);
  };

  const mutation = useMutation({
    mutationFn: addExpenses,
    onSuccess: () => {
      queryClient.invalidateQueries("expenses");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") setDate(value);
    if (name === "item") setItem(value);
    if (name === "amount") setAmount(value);
    if (name === "description") setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(buyList));
    localStorage.setItem("buyList", JSON.stringify([...list, buyList]));
    mutation.mutate(buyList);
  };

  return (
    <>
      <InputFormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">날짜</label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            placeholder="날짜"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item">항목</label>
          <br />
          <input
            type="text"
            id="item"
            name="item"
            value={item}
            placeholder="지출 항목"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">금액</label>
          <br />
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            placeholder="지출 금액"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">내용</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            placeholder="지출 내용"
            onChange={handleChange}
          />
        </div>
        <button type="submit">저장</button>
      </InputFormStyle>
      <Calender />
      <Receipt />
    </>
  );
};

export default InputForm;
