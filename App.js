import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1",{id:"heading"},"Create this is react");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
setTimeout(() => {
    root.render(heading);
  }, "5000");
//root.render(heading);