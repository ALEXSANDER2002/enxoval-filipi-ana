import { useState } from 'react';
import { ItemList } from '../components/ItemList';
import { Item } from '../data/items';

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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Lista de Enxoval</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ItemList onItemCheck={handleItemCheck} />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Itens Selecionados ({checkedItems.length})</h2>
          {checkedItems.length > 0 ? (
            <ul className="space-y-2">
              {checkedItems.map(item => (
                <li key={item.id} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <button
                    onClick={() => handleItemCheck(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">Nenhum item selecionado</p>
          )}
        </div>
      </div>
    </div>
  );
} 