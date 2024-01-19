import React from 'react';
import Accordion from './Accordion';

const items = [
  { title: 'Section 1', content: 'Content for Section 1', isExpand: false },
  { title: 'Section 2', content: 'Content for Section 2', isExpand: false},
  { title: 'Section 3', content: 'Content for Section 3', isExpand: false}
];

const App = () => {
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
