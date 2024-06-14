import React, { useEffect } from "react";
import {
  NavBtnStyle,
  NavNicknameStyle,
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

      <NavNicknameStyle>
        {avatar && (
          <img
            src={avatar}
            alt="Profile"
            style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
          />
        )}
        <span>{nickname} 님</span>
      </NavNicknameStyle>
      <NavBtnStyle onClick={onHandleLogOut}>로그아웃</NavBtnStyle>
    </NavbarStyle>
  );
};

export default Navbar;
