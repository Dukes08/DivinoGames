import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebase/config";
import Navbar from "../../Components/Navbar/Navbar";

function Profile() {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [favoritegame, setFavoriteGame] = useState("");
    
    const { currentUser } = auth; // Obtener el usuario actual desde el contexto de autenticación
    const db = getFirestore();

    useEffect(() => {
        const fetchUserData = async () => {
            const userRef = doc(db, `users/${currentUser.uid}`);
            const userSnapshot = await getDoc(userRef);

            if (userSnapshot.exists()) {
                const userData = userSnapshot.data();
                setName(userData.name || "");
                setLastName(userData.lastname || "");
                setFavoriteGame(userData.favoritegame || "");
            }
        };

        fetchUserData();
    }, [db, currentUser.uid]);

    const handleRegister = async () => {
        const userRef = doc(db, `users/${currentUser.uid}`);

        try {
            await updateDoc(userRef, {
                name: name,
                lastname: lastname,
                favoritegame: favoritegame
            });

            console.log("Perfil actualizado con éxito");
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="w-full h-screen bg-emerald-400 flex justify-center items-center">
            <div className="bg-white w-96 h-96 shadow-md shadow-slate-950 flex flex-col items-center">
                <h1 className="text-3xl font-bold font-sans mt-8 text-emerald-400">Profile</h1>

                <div className="w-full flex flex-col items-center">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" />
                    <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} className="w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" />
                    <input type="text" placeholder="Favorite Game" value={favoritegame} onChange={(e) => setFavoriteGame(e.target.value)} className="w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" />
                </div>

                <div className="w-full text-center">
                    <button onClick={handleRegister} className="bg-emerald-400 p-4 w-4/5">Register</button>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default Profile;


