"use client"

import React, { useState, useEffect } from 'react';
import { ItemList } from './components/ItemList';
import { Header } from './components/Header';
import { categories } from './data/items';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Carrega os itens salvos do localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('checkedItems');
    if (savedItems) {
      setCheckedItems(new Set(JSON.parse(savedItems)));
    }
  }, []);

  // Salva os itens no localStorage quando houver mudanças
  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify([...checkedItems]));
  }, [checkedItems]);

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
  };

  // Encontra o nome do item pelo ID
  const getItemName = (itemId: string) => {
    for (const category of categories) {
      const item = category.items.find(item => item.id === itemId);
      if (item) return item.name;
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header progress={progress} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Lista de Itens
              </h2>
              <ItemList onItemCheck={handleItemCheck} onProgressUpdate={setProgress} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Itens Selecionados
              </h2>
              <div className="text-sm text-gray-500 mb-4">
                {checkedItems.size} itens selecionados
              </div>
              
              {checkedItems.size > 0 ? (
                <ul className="space-y-3">
                  {[...checkedItems].map(itemId => (
                    <li 
                      key={itemId} 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="text-gray-700">{getItemName(itemId)}</span>
                      <button
                        onClick={() => handleItemCheck(itemId, false)}
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
