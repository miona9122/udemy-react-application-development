import React from "react";

function App() {
  // JSXの記述
  //const dom = <h1 className="foo">Hi, Tom!</h1>;
  // JavaScriptの記述
  // return React.createElement("div", null, "Hello, world!!");
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => console.log("Hi!")} />
    </React.Fragment>
  );
}

export default App;
