import React, { useEffect, useState } from "react";
import { InputFormStyle } from "../style/InputFormStyle";
import Receipt from "./Receipt";
import Calender from "./Calender";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setList } from "../redux/slices/listSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const InputForm = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedList = localStorage.getItem("buyList");
    if (storedList) {
      dispatch(setList(JSON.parse(storedList)));
    }
  }, [dispatch]);

  const buyList = {
    date,
    item,
    price,
    content,
    id: uuidv4(),
  };

  const addExpenses = async (newExpenses) => {
    await axios.post("localhost:5000/expenses", newExpenses);
  };

  const handleChange = (e) => {
    e.preventDefault();

    // const { name, value } = e.target;
    // if (name === "date") setDate(value);
    // if (name === "item") setItem(value);
    // if (name === "price") setPrice(value);
    // if (name === "content") setContent(value);.
    const mutation = useMutation({
      mutationFn: addExpenses,
    });

    const { name, value } = e.target;
    if (name === "date") setDate(value);
    if (name === "item") setItem(value);
    if (name === "price") setPrice(value);
    if (name === "content") setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(buyList));
    localStorage.setItem("buyList", JSON.stringify([...list, buyList]));
  };

  const {
    data: expenses,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/expenses");
      return response.data;
    },
  });

  if (isPending) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>데이터 조회중 오류가 발생했습니다.</div>;
  }
  console.log("data", expenses);

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
          <label htmlFor="price">금액</label>
          <br />
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            placeholder="지출 금액"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <br />
          <input
            type="text"
            id="content"
            name="content"
            value={content}
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
