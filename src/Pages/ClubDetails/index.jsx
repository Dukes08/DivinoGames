import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import GameCard from "../../Components/GameCard/GameCard";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth } from "../../firebase/config";
import { useParams } from "react-router-dom";

const ClubDetails = () => {
  const [games, setGames] = useState([]);
  const [clubInfo, setClubInfo] = useState({});
  const [isMember, setIsMember] = useState(false);
  const { id } = useParams();
  const { currentUser } = auth;
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

          // Verificar si el usuario está unido al club
          const userRef = doc(db, `users/${currentUser.uid}`); // Reemplaza USERNAME con el nombre de usuario actual
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            const membresias = userData.membresias || [];

            if (membresias.includes(id)) {
              setIsMember(true);
            } else {
              setIsMember(false);
            }
          }
        }
      }
    };

    fetchClubData();
  }, [id]);

  const handleJoinLeaveClub = async () => {
    const userRef = doc(db, `users/${currentUser.uid}`); // Reemplaza USERNAME con el nombre de usuario actual
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      let membresias = userData.membresias || [];

      if (isMember) {
        membresias = membresias.filter((clubId) => clubId !== id);
      } else {
        membresias.push(id);
      }

      await updateDoc(userRef, { membresias });
      setIsMember(!isMember);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-xl font-medium text-black mt-4">{clubInfo.nombre}</h1>
        <p>{clubInfo.descripcion}</p>
        <h2>Juegos Disponibles:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="flex justify-center"> {/* Contenedor para centrar el botón */}
          <button onClick={handleJoinLeaveClub} className="w-4/2 text-black font-bold my-2 bg-emerald-400 rounded-md p-4 text-center flex justify-center cursor-pointer">
            {isMember ? "Abandonar Club" : "Unir Agrupación"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ClubDetails;
