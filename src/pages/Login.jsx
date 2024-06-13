import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginFormTitle,
  InputContainer,
  SignupButtonContainer,
} from "../style/LoginStyle";
import { useNavigate } from "react-router-dom";
import {
  login,
  setAvatar,
  setId,
  setNickname,
  setPassword,
} from "../redux/slices/authSlice";
import { authApi } from "../../api/axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, setFormState] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState({ id: "", password: "", nickname: "" });
  };

  const { id, password, nickname } = formState;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        const { data } = await authApi.post("/login", {
          id,
          password,
        });
        const { accessToken, avatar, nickname, userId } = data;
        if (data.success) {
          alert("로그인 성공");
          localStorage.setItem("accessToken", accessToken);

          dispatch(setId(id));
          dispatch(setPassword(password));
          dispatch(setNickname(nickname));
          dispatch(setAvatar(avatar));
          dispatch(login());
        }
      } catch (err) {
        alert(err?.response?.data?.message);
        console.error(err);
      }
    }
  };
  return (
    <LoginContainer>
      <LoginForm>
        <LoginFormTitle>
          로그인
          <br />
        </LoginFormTitle>
        <InputContainer>
          <div>
            <label>
              ID :{" "}
              <input
                type="text"
                name="id"
                value={id}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              PW
              <input
                type="password"
                value={password}
                name="password"
                onChange={onChangeHandler}
              />
            </label>
          </div>
          <div>
            <button onClick={onSubmitHandler}>로그인</button>
          </div>
        </InputContainer>
        <SignupButtonContainer>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </SignupButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
