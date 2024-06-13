import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Provider, useSelector } from "react-redux";
import store from "./../redux/config/configStore";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Mypage from "../pages/Mypage";

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? element : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="/signup"
            element={<PublicRoute element={<SignUp />} />}
          />

          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/mypage"
            element={<PrivateRoute element={<Mypage />} />}
          />
          <Route
            path="detail/:id"
            element={<PrivateRoute element={<Detail />} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
