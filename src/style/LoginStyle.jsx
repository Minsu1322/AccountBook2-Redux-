import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 650px;
  height: 530px;
  display: flex;
  justify-content: center;
  margin: 180px auto;
  padding: 15px;
  background-color: #d8c4aa;
  border-radius: 50px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const LoginForm = styled.div`
  width: 100%;
  background-color: #d8c4aa;
  border: 2px solid aliceblue;
  border-radius: 50px;
  padding: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
`;

export const LoginFormTitle = styled.div`
  background-color: transparent;
  border-radius: 15px;
  font-size: 36px;
  font-weight: 900;
  font-family: monospace;
  color: #0e0e0d78;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: transparent;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
    padding: 30px 30px 30px 0px;
  }

  label {
    font-size: 18px;
    margin-bottom: 10px;
    background-color: transparent;
    margin: 20px;
  }

  input {
    margin-left: 20px;
    border-radius: 15px;
    padding: 0.5rem;
    width: 15rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    background-color: #ffffff97;
  }

  input:hover {
    scale: 1.1;
    background-color: #ffffffa6;
  }

  button {
    margin-top: 15px;
    padding: 50px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;
    background-color: #ffffff97;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 20px;
  }
`;

export const SignupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: transparent;
  width: 100%;

  button {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;
    background-color: #ffffffa6;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
