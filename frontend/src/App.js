import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Home" />
      <Header>
        <ul>
          <li>Home</li>
          <li>Config</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
