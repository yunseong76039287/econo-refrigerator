import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Contents from "./Contents";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Contents />
    </div>
  );
};

export default App;
