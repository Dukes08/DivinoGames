import React from "react";

function GameCard({ game }) {
  return (
    <div className="bg-emerald-400 rounded-lg shadow-md p-4 m-4">
      <h2 className="text-xl font-semibold text-gray-800">{game.titulo}</h2>
      <h3 className="text-xl font-semibold text-gray-700">{game.genero}</h3>
      <p className="text-gray-600">{game.descripcion}</p>
      <img src={game.imagen} alt={game.nombre} className="mt-4 rounded-md" />
    </div>
  );
}

export default GameCard;