import React, { useState } from 'react';
import Item from './Item'; // Adjust the path as needed

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        {/* Add other categories as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
