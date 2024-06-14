import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  background-color: #d8c4aa;
  padding: 1rem;
`;

export const NavBtnStyle = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: beige;
  padding: 1rem;
  border-radius: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

export const NavNicknameStyle = styled.span`
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid black;
  font-size: 32px;
  font-weight: 800;
  font-family: monospace;
  color: #0e0e0d78;
  margin-right: 15px;

  padding: 7px;
  display: flex;
  img {
    margin: -5px 5px 0 5px;
    display: block;
  }

  span {
    background-color: transparent;
    justify-content: center;
    text-align: center;
    margin-top: 5px;
  }
`;
