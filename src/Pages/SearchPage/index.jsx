import React, { useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import GameCard from "../../Components/GameCard/GameCard";
import Navbar from "../../Components/Navbar/Navbar";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const db = getFirestore();

  const handleSearch = async () => {
    const gamesRef = collection(db, "videojuegos");
    const q = query(gamesRef, where("titulo", "==", searchTerm));
    const querySnapshot = await getDocs(q);
    
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    setSearchResults(results);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />

      <div className="flex flex-col mt-10 w-96 items-center" >
        <div className="flex flex-row items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ingrese el nombre del juego"
            className="w-full max-w-md px-4 py-2 rounded-lg border"
          />
          <button onClick={handleSearch} className="ml-4 px-4 py-2 bg-emerald-400 text-white rounded-lg">
            Buscar
          </button>
        </div>


        {searchResults.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
