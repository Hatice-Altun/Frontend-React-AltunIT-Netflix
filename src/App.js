import React from "react";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import "./App.scss";

function App() {
  return (
      <div className="App">
          <Home/>
          <Register/>
          <Login/>
      </div>
  );
}

export default App;
