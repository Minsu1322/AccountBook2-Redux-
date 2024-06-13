import styled from "styled-components";

export const MypageStyle = styled.div`
  margin: auto;
  margin-top: calc(30vh - 100px);
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 25rem;
  gap: 20px;
  border: 2px solid gray;
  border-radius: 30px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
  font-size: 20px;
  padding: 0px;
  justify-content: center;
  background-color: #d8c4aa;
`;

export const MypageChangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: transparent;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
    padding: 10px; /* padding을 줄임 */
  }

  label {
    font-size: 18px;
    margin-bottom: 10px;
    background-color: transparent;
    margin: 30px 0 20px 0;
  }

  input {
    border-radius: 15px;
    padding: 0.3rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    width: 70%;
  }

  input:hover {
    scale: 1.1;
    background-color: #ffffffa6;
  }

  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 250px; /* 아바타 컨테이너 크기를 줄임 */
    border: 2px aliceblue solid;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .avatar-preview {
    margin-bottom: 10px;
  }

  button {
    border-radius: 15px;
    padding: 0.3rem;
    margin-top: 40px;
    margin-right: auto;
    width: 10rem;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
