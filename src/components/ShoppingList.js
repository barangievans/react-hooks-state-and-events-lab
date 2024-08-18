// src/components/ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Dessert'];

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter(item =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className="items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
