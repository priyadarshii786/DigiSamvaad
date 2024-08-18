import React from "react";

import Right from "./home/right/Right";
import Left from "./home/left/left";
import Logout from "./home/left1/Logout";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
