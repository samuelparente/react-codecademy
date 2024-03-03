import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person, i) =>
  <li key={'person_'+i}>{person}</li>
);

root.render(<ul>{peopleList}</ul>);