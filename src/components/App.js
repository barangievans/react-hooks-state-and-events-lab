// src/App.js
import React from 'react';
import ShoppingList from './ShoppingList';

const appData = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Carrot', category: 'Vegetables' },
  { id: 3, name: 'Milk', category: 'Dairy' },
  { id: 4, name: 'Cake', category: 'Dessert' },
];

function App() {
  return (
    <div className="App">
      <h1>Grocery List</h1>
      <ShoppingList items={appData} />
    </div>
  );
}

export default App;
