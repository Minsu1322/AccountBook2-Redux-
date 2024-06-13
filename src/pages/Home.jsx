import React from "react";
import InputForm from "../components/InputForm";
import { StHomeDiv } from "../style/HomeStyle";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <StHomeDiv>
        <InputForm />
      </StHomeDiv>
    </>
  );
};

export default Home;
