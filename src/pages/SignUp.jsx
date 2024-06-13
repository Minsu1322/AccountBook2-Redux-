import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginFormTitle,
  InputContainer,
  SignupButtonContainer,
} from "../style/LoginStyle";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/axios";

const SignUp = () => {
  const navigate = useNavigate();
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
    try {
      const { data } = await authApi.post("/register", {
        id,
        password,
        nickname,
      });
      if (data.success) {
        resetForm();
        alert("회원가입 성공");
        navigate("/login");
      } else {
        alert("회원가입 실패: " + data.message);
      }
    } catch (err) {
      alert("회원가입 중 오류 발생: " + err.response.data.message);
    }
  };
  return (
    <LoginContainer>
      <LoginForm>
        <LoginFormTitle>
          회원가입
          <br />
        </LoginFormTitle>
        <InputContainer>
          <div>
            <label>
              ID :
              <input
                type="text"
                name="id"
                value={id}
                onChange={onChangeHandler}
              />
            </label>

            <label>
              PW :
              <input
                type="password"
                value={password}
                name="password"
                onChange={onChangeHandler}
              />
            </label>

            <label>
              Name :
              <input
                type="text"
                value={nickname}
                name="nickname"
                onChange={onChangeHandler}
              />
            </label>
          </div>
          <div>
            <button onClick={onSubmitHandler}>회원가입</button>
          </div>
        </InputContainer>
        <SignupButtonContainer>
          <button onClick={() => navigate("/login")}>뒤로</button>
        </SignupButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default SignUp;
