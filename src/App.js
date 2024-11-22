import React from "react";
import User from "./User";
import HomeContainer from "./containers/HomeContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HomeContainer />
      {/* <h1>App component </h1>
      <User data={{ name: "divya", age: 29, email: "divya@g.com" }} /> */}
    </div>
  );
}

export default App;
