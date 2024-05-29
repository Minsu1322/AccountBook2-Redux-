import React from "react";
import InputForm from "./components/InputForm";
import Calender from "./components/Calender";
import Receipt from "./components/Receipt";
import Home from "./pages/Home";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
