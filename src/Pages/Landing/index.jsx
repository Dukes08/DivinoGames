import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ClubCard from "../../Components/ClubCard/ClubCard";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

 function Landing() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    // Inicializar Firebase con tu configuración
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

    // Obtener los datos de los clubes desde Firebase
    const fetchClubs = async () => {
      const querySnapshot = await getDocs(collection(db, "clubes"));
      const clubsData = querySnapshot.docs.map((doc) => doc.data());
      setClubs(clubsData);
    };

    fetchClubs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-xl font-medium text-black">Clubes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clubs.map((club) => (
            <ClubCard key={club.ID} club={club} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;