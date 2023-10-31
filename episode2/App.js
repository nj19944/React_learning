import React from 'react';
import ReactDOM  from 'react-dom';

//Object
const parent = React.createElement("h1", {id:"react-heading"}, "React is here............") 

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)