import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return <main><h1>Ephemeral Mail</h1><p>Disposable inboxes, built with privacy in mind.</p></main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
