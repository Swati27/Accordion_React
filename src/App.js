import React, { useState }  from "react";
import Accordion from "./Accordion";

const items = [
  { title: "Section 1", content: "Content for Section 1" },
  { title: "Section 2", content: "Content for Section 2" },
  { title: "Section 3", content: "Content for Section 3" },
];

const App = () => {
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items}  />
    </div>
  );
};

export default App;
