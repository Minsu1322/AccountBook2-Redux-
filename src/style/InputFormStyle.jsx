import styled from "styled-components";

export const InputFormStyle = styled.form`
  display: flex;
  margin: 20px;
  flex-direction: row;
  padding: 2.5rem;
  border-radius: 30px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  .form-group {
    margin-right: 50px;
    flex: auto;
    scale: 1.2;
  }

  input {
    border-radius: 15px;
    padding: 0.3rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    background-color: #ffffff97;
  }

  input:hover {
    scale: 1.1;
    background-color: #ffffffa6;
  }

  button {
    border-radius: 15px;
    padding: 0.3rem;
    margin-left: 10px;
    width: 4rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
