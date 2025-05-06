import React, { useState } from 'react';
import { categories, Category, Item } from '../data/items';

interface ItemListProps {
  onItemCheck?: (item: Item) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ onItemCheck }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleItemCheck = (item: Item) => {
    if (onItemCheck) {
      onItemCheck(item);
    }
  };

  return (
    <div className="space-y-4">
      {categories.map(category => (
        <div key={category.id} className="border rounded-lg p-4">
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full flex justify-between items-center text-lg font-semibold mb-2"
          >
            <span>{category.name}</span>
            <span>{expandedCategories.includes(category.id) ? '▼' : '▶'}</span>
          </button>
          
          {expandedCategories.includes(category.id) && (
            <div className="space-y-2">
              {category.items.map(item => (
                <div key={item.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleItemCheck(item)}
                    className="h-4 w-4"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}; 