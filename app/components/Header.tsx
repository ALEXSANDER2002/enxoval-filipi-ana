import React from 'react';
import { categories } from '../data/items';

interface HeaderProps {
  progress: number;
}

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  // Calcula o total de itens
  const totalItems = categories.reduce((acc, category) => acc + category.items.length, 0);

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Lista de Enxoval</h1>
        <p className="text-center text-pink-100 mb-6">
          Organize seus itens e acompanhe o que já foi comprado
        </p>

        {/* Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">Total de Itens</h3>
            <p className="text-3xl font-bold">{totalItems}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">Categorias</h3>
            <p className="text-3xl font-bold">{categories.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">Progresso</h3>
            <p className="text-3xl font-bold">{progress}%</p>
          </div>
        </div>

        {/* Lista de Categorias */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center"
            >
              <p className="text-sm font-medium">{category.name}</p>
              <p className="text-xs text-pink-100">{category.items.length} itens</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}; 