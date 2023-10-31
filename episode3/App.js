import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const Title = () => {
  return (
    <>
      <h1>Namaste React using JSX 🚀</h1>
    </>
  );
};

const Heading = () => {
  return (
    <>
      <div id="container">
        <Title />
        <h1>Namaste React Functional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)
