import {
  ReceiptStyle,
  ButtonStyle,
  ButtonContainer,
} from "../style/ReceiptStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/listSlice";
import { authApi, jsonApi } from "./../../api/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Receipt = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const selectedMonth = useSelector((state) => state.month.selectedMonth);

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

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  if (selectedMonth === null) {
    return (
      <div
        style={{
          borderRadius: "20px",
          margin: "0 20px 0 20px",
          padding: "5px",
        }}
      >
        "월" 을 선택해주세요
      </div>
    );
  }

  const handleDelete = async (id) => {
    await jsonApi.delete(`/expenses/${id}`);
    dispatch(removeItem(id));
    const updatedList = expenses.filter((item) => item.id !== id);
    localStorage.setItem("buyList", JSON.stringify(updatedList));
    queryClient.invalidateQueries("expenses");
  };

  const filteredList = expenses.filter((e) => {
    if (!e.date) return false;
    const month = e.date.split("-")[1];
    const formattedMonth = month.startsWith("0") ? month.slice(1) : month;
    return formattedMonth === selectedMonth.toString();
  });

  const id = localStorage.getItem("id");

  return (
    <div style={{ backgroundColor: "transparent" }}>
      {filteredList.map((entry, index) => (
        <ReceiptStyle key={index}>
          {entry.date}
          <br />
          {entry.item} - {entry.amount}원 - {entry.description} -{" "}
          {`By <${entry.createdBy}>`}
          <ButtonContainer>
            <Link to={`/detail/${entry.id}`}>
              <ButtonStyle>상세</ButtonStyle>
            </Link>
            <ButtonStyle onClick={() => handleDelete(entry.id)}>
              삭제
            </ButtonStyle>
          </ButtonContainer>
        </ReceiptStyle>
      ))}
    </div>
  );
};
export default Receipt;
