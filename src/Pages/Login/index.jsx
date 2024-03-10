import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";

import Google_logo from '../../assets/Google_logo.svg.png'
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const onSuccess = () => {
      navigate(HOME_URL);
    };

    const onFail = (_error) => {
      console.log("LOGIN FAILED, Try Again");
    };

    const onSubmit = async (event) => {
      event.preventDefault();
  
      await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
    };
  
    const onChange = (event) => {
      const { name, value } = event.target;
  
      setFormData((oldData) => ({ ...oldData, [name]: value }));
    };
  
    const handleGoogleClick = async () => {
      await signInWithGoogle({
        onSuccess: () => navigate("/landing"),
      });
    };


  
    return (
    
        <div className="w-full h-screen flex items-start">

        <form onSubmit={onSubmit} className="w-full h-screen flex">

          <div className="relative w-1/2 h-full flex flex-col bg-emerald-400" >

              <div className="absolute top-[30%] left-[10%] flex flex-col">

                <h1 className="text-4xl text-black font-bold my-4">Watch The Games You Always Wanted</h1>

                <p className="text-x1 text-black font-normal mx-2">Be A Kid Again And Watch Those Games Of The Golden Age</p>
              </div>
          </div>


           <div className="w-1/2 h-full bg-white flex flex-col p-20 justify-evenly">
          
                
                  <h3 className="text-3xl font-semibold mb-4">Login</h3>
                  <p className="text-sm mb-2">Welcome! Please enter your details.</p>

                  
                  <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  onChange={onChange}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus: outline-none"
                  />

                <input 
                  type="password" 
                  name="password"
                  placeholder="Password"
                  onChange={onChange}

                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus: outline-none"
                  />
                
                  <button type="submit" className="w-full text-black font-bold my-2 bg-emerald-400 rounded-md p-4 text-center flex justify-center cursor-pointer">
                    Log In
                  </button>

                  <button className="w-full text-emerald-400 font-bold my-2 bg-white border-2 border-emerald-400 rounded-md p-4 text-center flex justify-center cursor-pointer">Sign Up</button>
                

                <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black"></div>
                  <p className="text-lg absolute text-black bg-white">or</p>
                </div>


                <button type="button" onClick={handleGoogleClick} className="w-full text=black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex justify-center cursor-pointer">
                  <img src={Google_logo} alt="googlelogo" className="h-4 mt-1 mr-1" />
                  Sign In With Google
                </button>


                
                <Link to="/sign-up" className="w-full flex justify-center"><p className=" text-sm font-normal  "> Dont have a account <span className=" font-semibold underline underline-offset-2 cursor-pointer " >Sign Up</span></p>
                </Link>

            
          </div>
          </form>
        </div>
        
    
    )
  }
  
  export default Login