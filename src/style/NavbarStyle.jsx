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

export const NavTitleStyle = styled.span`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  padding: 1rem;
  border-radius: 15px;
  font-size: 50px;
  font-weight: 800;
  font-family: monospace;
  color: #0e0e0d78;

  flex-grow: 1;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavNicknameStyle = styled.span`
  text-align: center;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid black;
  padding: 10px;
  font-size: 16px;
  font-weight: 800;
  font-family: monospace;
  color: #0e0e0d78;
  margin-right: 5px;
`;
