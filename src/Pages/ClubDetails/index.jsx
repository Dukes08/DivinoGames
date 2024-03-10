import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import GameCard from "../../Components/GameCard/GameCard";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ClubDetails = () => {
  const [games, setGames] = useState([]);
  const [clubInfo, setClubInfo] = useState({});
  const { id } = useParams();
  const firebaseConfig = {
    apiKey: "AIzaSyDYbZvC9olPvQ0kvLgrRkqRomdZ0aheymU",
    authDomain: "divinogames-47439.firebaseapp.com",
    projectId: "divinogames-47439",
    storageBucket: "divinogames-47439.appspot.com",
    messagingSenderId: "686164158446",
    appId: "1:686164158446:web:127f0fc5f3ef52af21d0ff"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchClubData = async () => {
      if (id) {
        const clubRef = doc(db, `clubes/${id}`);
        const clubSnapshot = await getDoc(clubRef);

        if (clubSnapshot.exists()) {
          const clubData = clubSnapshot.data();
          setClubInfo(clubData);

          const videojuegosIds = clubData.videojuegos;
          const gamesData = [];

          for (const id of videojuegosIds) {
            const gameDoc = await getDoc(doc(db, `videojuegos/${id}`));

            if (gameDoc.exists()) {
              const gameData = gameDoc.data();
              gamesData.push(gameData);
            }
          }

          setGames(gamesData);
        }
      }
    };

    fetchClubData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-xl font-medium text-black mt-4">{clubInfo.nombre}</h1>
        <p>{clubInfo.descripcion}</p>
        <h2>Juegos Disponibles:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.ID} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ClubDetails;
