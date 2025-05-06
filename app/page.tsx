"use client"

import { useState } from 'react';
import { ItemList } from './components/ItemList';
import { Header } from './components/Header';
import { Item } from '../src/data/items';

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Item[]>([]);

  const handleItemCheck = (item: Item) => {
    setCheckedItems(prev => {
      const isChecked = prev.some(i => i.id === item.id);
      if (isChecked) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Lista de Itens
              </h2>
              <ItemList onItemCheck={handleItemCheck} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Itens Selecionados
              </h2>
              <div className="text-sm text-gray-500 mb-4">
                {checkedItems.length} itens selecionados
              </div>
              
              {checkedItems.length > 0 ? (
                <ul className="space-y-3">
                  {checkedItems.map(item => (
                    <li 
                      key={item.id} 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <button
                        onClick={() => handleItemCheck(item)}
                        className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Nenhum item selecionado</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Selecione os itens que você já comprou
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
