import styled from "styled-components";

export const Detailstyle = styled.div`
  margin: auto;
  margin-top: calc(30vh - 100px);
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: 30rem;
  gap: 20px;
  border: 2px solid gray;
  border-radius: 30px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
  font-size: 20px;
  padding: 30px;
  text-align: center;
  justify-content: center;

  input {
    border-radius: 15px;
    padding: 0.3rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
  }

  input:hover {
    scale: 1.1;
    background-color: #ffffffa6;
  }

  button {
    border-radius: 15px;
    padding: 0.3rem;
    margin-left: auto;
    margin-right: auto;
    width: 25rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
