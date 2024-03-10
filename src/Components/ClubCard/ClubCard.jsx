import React from "react";
import { Link } from "react-router-dom";

function ClubCard({ club }) {
  return (
    <Link to={`/club/${club.ID}`} state={{ club }}>
      <div className="bg-emerald-400 rounded-lg shadow-md p-4 m-4">
        <h2 className="text-xl font-semibold text-gray-800">{club.nombre}</h2>
        <p className="text-gray-600">{club.descripcion}</p>
      </div>
    </Link>
  );
}

export default ClubCard;
