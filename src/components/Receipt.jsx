import {
  ReceiptStyle,
  ButtonStyle,
  ButtonContainer,
} from "../style/ReceiptStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/listSlice";

const Receipt = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.month.selectedMonth);

  if (selectedMonth === null) {
    return <div>월을 선택해주세요</div>;
  }

  const handleDelete = (id) => {
    dispatch(removeItem(id));
    const updatedList = list.filter((item) => item !== id);
    localStorage.setItem("buyList", JSON.stringify(updatedList));
  };

  const filteredList = list.filter((e) => {
    if (!e.date) return false;
    const month = e.date.split("-")[1];
    const formattedMonth = month.startsWith("0") ? month.slice(1) : month;
    return formattedMonth === selectedMonth.toString();
  });

  return (
    <div style={{ backgroundColor: "transparent" }}>
      {filteredList.map((entry, index) => (
        <ReceiptStyle key={index}>
          {entry.date}
          <br />
          {entry.item} - {entry.price}원 - {entry.content}
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
