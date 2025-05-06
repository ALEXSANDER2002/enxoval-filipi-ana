import React, { useState, useEffect } from 'react';
import { categories, Category, Item } from '../data/items';

interface ItemListProps {
  onItemCheck: (itemId: string, checked: boolean) => void;
  onProgressUpdate: (progress: number) => void;
}

export function ItemList({ onItemCheck, onProgressUpdate }: ItemListProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Calcula o progresso
  useEffect(() => {
    const totalItems = categories.reduce((acc, category) => acc + category.items.length, 0);
    const progress = Math.round((checkedItems.size / totalItems) * 100);
    onProgressUpdate(progress);
  }, [checkedItems, onProgressUpdate]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const handleItemCheck = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(itemId);
      } else {
        next.delete(itemId);
      }
      return next;
    });
    onItemCheck(itemId, checked);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={expandedCategories.has(category.id)}
            >
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="text-gray-500">
                {expandedCategories.has(category.id) ? '▼' : '▶'}
              </span>
            </button>

            {expandedCategories.has(category.id) && (
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {category.items.map(item => (
                    <li key={item.id} className="px-4 py-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checkedItems.has(item.id)}
                          onChange={(e) => handleItemCheck(item.id, e.target.checked)}
                          className="h-4 w-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
                        />
                        <span className="text-gray-700">{item.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 