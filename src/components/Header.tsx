import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Lista de Enxoval</h1>
        <p className="text-center text-pink-100">
          Organize seus itens e acompanhe o que já foi comprado
        </p>
      </div>
    </header>
  );
}; 