import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body'

const Footer = () => {
  return (
    <div>
      <h1>This is the Footer Component...</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
