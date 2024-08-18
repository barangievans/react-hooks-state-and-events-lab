import React, { useState } from 'react';
import './App.css'; // Make sure you have styles defined for dark and light modes
import ShoppingList from './ShoppingList'; // Adjust the path as needed

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Example data for items
  const items = [
    { id: 1, name: 'Apple', category: 'Fruits' },
    { id: 2, name: 'Carrot', category: 'Vegetables' },
    { id: 3, name: 'Banana', category: 'Fruits' },
    { id: 4, name: 'Broccoli', category: 'Vegetables' }
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
