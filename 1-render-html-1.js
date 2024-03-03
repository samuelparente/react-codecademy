import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
    <li>Learn React</li>
    <li>by Samuel Parente</li>
  </ul>
);

root.render(myList);