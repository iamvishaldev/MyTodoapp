import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container vw-100 vh-100">
      <div className="mainStyle vh-100">
        <Todo />
      </div>
    </div>
  );
}

export default App;
