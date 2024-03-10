import Google_logo from "../../assets/Google_logo.svg.png"
import {Link, useNavigate} from "react-router-dom"
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth";
import { useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

function SignUp(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        favoritegame: "",
    })

  

    const onSuccess = () => {
        navigate("/landing");
      };
    
    const onFail = (_error) => {
        console.log("REGISTER FAILED, Try Again");
      };


    const handleOnchange = (event) =>{
        setFormData((oldData) => ({
            ...oldData,
            [event.target.name]: event.target.value,
          }));
        };

    const handleGoogleClick = async () => {
        await signInWithGoogle({
          onSuccess: () => navigate("/landing"),
        });
      };

      const onSubmit = async (event) => {
        event.preventDefault();

        // Verificar si el juego favorito está en la base de datos antes de registrar al usuario
        const gameExistsInDatabase = await checkGameInDatabase(formData.favoritegame);

        if (gameExistsInDatabase) {
    
            await registerWithEmailAndPassword({ userData: formData, onSuccess, onFail });
        } else {
            alert("El juego favorito no se encuentra en la base de datos. No se puede registrar.");
            // Puedes mostrar un mensaje al usuario indicando que el juego no está en la base de datos
        }
    };

    // Verificar si el juego favorito está en la base de datos antes de registrar al usuario


    const checkGameInDatabase = async (favoritegame) => {
      const db = getFirestore();
      const gamesRef = collection(db, "videojuegos");
      const q = query(gamesRef, where("titulo", "==", favoritegame));
      const querySnapshot = await getDocs(q);
      
      return !querySnapshot.empty;
  };

    // const onSubmit = async (event) => {
    //    event.preventDefault();   
    //    console.log({formData})
    //    await registerWithEmailAndPassword({userData:formData, onSuccess, onFail})
    // }



    return(
        <div className="w-full h-screen bg-emerald-400 flex justify-center items-center">
            <form onSubmit ={onSubmit} className="bg-white w-2/5 h-3/4 shadow-md shadow-slate-950 flex flex-col items-center">
                <h1 className="text-3xl font-bold font-sans mt-12 text-emerald-400">Sign Up</h1>

                <div className="w-full flex flex-col items-center">
                    <input type="text" placeholder="Name" name= "name"                     className=" w-4/5 
                    text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"
                    onChange={handleOnchange}/>


                    <input type="text" placeholder="Last Name" name= "lastname"
                    className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"
                    onChange={handleOnchange}/>


                    <input type="text" placeholder="Username" name="username"
                    className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"
                    onChange={handleOnchange}/>


                    <input 
                    type="email" placeholder="Email" name="email" 
                    className=" w-4/5 
                    text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none" 
                    onChange={handleOnchange}/>


                    <input type="password"
                    name="password" 
                    placeholder="Password" 
                    className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"
                    onChange={handleOnchange}/>


                    <input type="text" 
                    name="favoritegame"
                    placeholder="Favorite Game" 
                    className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none" onChange={handleOnchange}/>
                </div>

                <div className=" w-full text-center">

                    <button type="submit" className="bg-emerald-400 p-4 w-4/5">Register</button>

                </div>


                <button type="button" onClick={handleGoogleClick} className="w-4/5 text=black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex justify-center cursor-pointer">
                  <img src={Google_logo} alt="googlelogo" className="h-4 mt-1 mr-2" />
                  Sign Up With Google
                </button>

                <Link to="/" className="mt-4">
                Already have an account? <span className="text-emerald-400">Login</span>
                </Link>

                </form> 
        </div>
    )

}

export default SignUp