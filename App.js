import React from "react";
import Counter from "./Counter";  // React will find "Counter.js"


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
