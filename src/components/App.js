// src/components/App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList'; // Ensure this path is correct
import './App.css'; // Import your CSS file for styles

const appData = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Carrot', category: 'Vegetables' },
  { id: 3, name: 'Milk', category: 'Dairy' },
  { id: 4, name: 'Cake', category: 'Dessert' },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <ShoppingList items={appData} />
    </div>
  );
}

export default App;
