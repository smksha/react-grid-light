import { useState } from 'react';
import './App.css';
import MyGrid from './components/MyGrid.jsx';

function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <>
      <MyGrid config={config} />
    </>
  );
}

export default App;
