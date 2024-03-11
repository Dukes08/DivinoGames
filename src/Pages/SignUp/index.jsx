import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth";
import { useState, useEffect } from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import Google_logo from "../../assets/Google_logo.svg.png"

function SignUp(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        favoritegame: "",
        membresias: [],
    });

    const [availableGames, setAvailableGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const db = getFirestore();
            const gamesRef = collection(db, "videojuegos");
            const querySnapshot = await getDocs(gamesRef);

            const gamesList = [];
            querySnapshot.forEach((doc) => {
                gamesList.push(doc.data().titulo);
            });

            setAvailableGames(gamesList);
        };

        fetchGames();
    }, []);

    const handleOnchange = (event) =>{
        setFormData((oldData) => ({
            ...oldData,
            [event.target.name]: event.target.value,
        }));
    };

    const onSuccess = () => {
        navigate("/landing");
    };

    const onFail = (_error) => {
        console.log("REGISTER FAILED, Try Again");
    };

    const handleGoogleClick = async () => {
        await signInWithGoogle({
            onSuccess: () => navigate("/landing"),
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (availableGames.includes(formData.favoritegame)) {
            await registerWithEmailAndPassword({ userData: formData, onSuccess, onFail });
        } else {
            alert("El juego favorito no se encuentra en la base de datos. No se puede registrar.");
        }
    };

    return(
      <div className="w-full min-h-screen bg-emerald-400 flex justify-center items-center">
      <form onSubmit={onSubmit} className="bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold font-sans mt-12 text-emerald-400 text-center">Sign Up</h1>

          <div className="w-full flex flex-col items-center">
              <input type="text" placeholder="Name" name="name" className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" onChange={handleOnchange}/>

              <input type="text" placeholder="Last Name" name="lastname" className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" onChange={handleOnchange}/>

              <input type="text" placeholder="Username" name="username" className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" onChange={handleOnchange}/>

              <input type="email" placeholder="Email" name="email" className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" onChange={handleOnchange}/>

              <input type="password" name="password" placeholder="Password" className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none" onChange={handleOnchange}/>

              <select name="favoritegame" onChange={handleOnchange} value={formData.favoritegame} className="w-full md:w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus:outline-none">
                    <option value="" disabled>Select your favorite game</option>
                    {availableGames.map((game) => (
                        <option key={game} value={game}>{game}</option>
                    ))}
              </select>
                  <button type="submit" className="bg-emerald-400 p-4 w-full md:w-4/5">Register</button>
                  <button type="button" onClick={handleGoogleClick} className="w-full md:w-4/5 text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex justify-center cursor-pointer">
                      <img src={Google_logo} alt="googlelogo" className="h-4 mt-1 mr-2" />
                      Sign Up With Google
                  </button>

              <Link to="/" className="mt-4 block text-center">
                  Already have an account? <span className="text-emerald-400">Login</span>
              </Link>
          </div>
      </form> 
  </div>
    );
}

export default SignUp;
