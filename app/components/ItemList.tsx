import React, { useState } from 'react';
import { categories, Category, Item } from '../data/items';

interface ItemListProps {
  onItemCheck?: (item: Item) => void;
}

export function ItemList({ onItemCheck }: ItemListProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {categories.map((category: Category) => (
        <div key={category.id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            <span className="text-gray-500">
              {expandedCategories.has(category.id) ? '▼' : '▶'}
            </span>
          </button>
          
          {expandedCategories.has(category.id) && (
            <div className="p-4 bg-white">
              <ul className="space-y-2">
                {category.items.map((item: Item) => (
                  <li key={item.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={item.id}
                      onChange={() => onItemCheck?.(item)}
                      className="h-4 w-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
                    />
                    <label htmlFor={item.id} className="text-gray-700">
                      {item.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 