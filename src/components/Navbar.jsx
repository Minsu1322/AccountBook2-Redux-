import React, { useEffect } from "react";
import {
  NavBtnStyle,
  NavNicknameStyle,
  NavTitleStyle,
  NavbarStyle,
} from "../style/NavbarStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setAvatar } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.auth.nickname);
  const avatar = useSelector((state) => state.auth.avatar);

  useEffect(() => {
    const avatarUrl = localStorage.getItem("avatar");
    if (avatarUrl) {
      dispatch(setAvatar(avatarUrl));
    }
  }, [dispatch]);

  const onHandleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <NavbarStyle>
      <NavBtnStyle onClick={() => navigate("/signup")}>홈</NavBtnStyle>
      <NavBtnStyle
        style={{ marginRight: "auto" }}
        onClick={() => navigate("/mypage")}
      >
        마이페이지
      </NavBtnStyle>
      <NavTitleStyle>지출 관리 시스템</NavTitleStyle>
      {avatar && (
        <img
          src={avatar}
          alt="Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      )}
      <NavNicknameStyle>"{nickname}"</NavNicknameStyle>
      <NavBtnStyle
        onClick={onHandleLogOut}
        style={{ backgroundColor: "skyblue" }}
      >
        로그아웃
      </NavBtnStyle>
    </NavbarStyle>
  );
};

export default Navbar;
