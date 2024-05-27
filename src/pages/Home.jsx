import React from "react";
import InputForm from "../components/InputForm";

const Home = ({ list, setList }) => {
  return (
    <div>
      <InputForm list={list} setList={setList} />
    </div>
  );
};

export default Home;
