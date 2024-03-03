import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Sums 2 plus 3 and shows 5
root.render(<h1>{2 + 3}</h1>);