import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  const [list, setList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route
          path="detail/:id"
          element={<Detail list={list} setList={setList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
