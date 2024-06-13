import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MypageChangeContainer, MypageStyle } from "../style/MypageStyle";
import { authApi } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setNickname, setAvatar } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const storedNickname = useSelector((state) => state.auth.nickname);
  const [nickname, setNicknameState] = useState(storedNickname);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await authApi.get("/user");
        if (data.success) {
          setAvatarPreview(data.avatar);
          dispatch(setAvatar(data.avatar));
        } else {
          alert("프로필 정보를 불러오지 못했습니다: " + data.message);
        }
      } catch (err) {
        alert(
          "프로필 정보를 불러오는 중 오류 발생: " + err.response.data.message
        );
      }
    };

    fetchProfile();
  }, [dispatch]);

  useEffect(() => {
    const avatarUrl = localStorage.getItem("avatar");
    if (avatarUrl) {
      setAvatarPreview(avatarUrl);
      dispatch(setAvatar(avatarUrl));
    }
  }, [dispatch]);

  const onChangeHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("nickname", nickname);

      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data.success) {
        alert("변경 성공");
        dispatch(setNickname(nickname));
        dispatch(setAvatar(data.avatar));
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("avatar", data.avatar);
        navigate("/");
      } else {
        alert("변경 실패: " + data.message);
      }
    } catch (err) {
      alert("변경 중 오류 발생: " + err.response?.data?.message);
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNicknameChange = (event) => {
    setNicknameState(event.target.value);
  };

  return (
    <>
      <Navbar />
      <MypageStyle>
        <MypageChangeContainer>
          <div>
            <label>
              Name:{" "}
              <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={handleNicknameChange}
              />
            </label>

            <label>
              Avatar:
              <br />
              <input type="file" name="avatar" onChange={handleAvatarChange} />
            </label>

            <button onClick={onChangeHandler}>변경완료</button>
          </div>

          <div className="avatar-container">
            <div className="avatar-preview">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </MypageChangeContainer>
      </MypageStyle>
    </>
  );
};

export default Mypage;
