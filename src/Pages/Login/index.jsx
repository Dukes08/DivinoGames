import Google_logo from '../../assets/Google_logo.svg.png'
function Login() {
  

    return (
      <>
      {/* Message */}
        <div className="w-full h-screen flex items-start">

          <div className="relative w-1/2 h-full flex flex-col bg-emerald-400" >

              <div className="absolute top-[30%] left-[10%] flex flex-col">

                <h1 className="text-4xl text-black font-bold my-4">Watch The Games You Always Wanted</h1>

                <p className="text-x1 text-black font-normal mx-2">Be A Kid Again And Watch Those Games Of The Golden Age</p>
              </div>
          </div>
          <div className="w-1/2 h-full bg-white flex flex-col p-20 justify-evenly ">

                <div className="w-full flex flex-col mb-4">
                  <h3 className="text-3xl font-semibold mb-4">Login</h3>
                  <p className="text-sm mb-2">Welcome! Please enter your details.</p>

                  <div>
                  <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus: outline-none"
                  />

                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus: outline-none"
                  />
                </div>
                </div>

                <div className="w-full flex flex-col my-4 ">

                  <button className="w-full text-black font-bold my-2 bg-emerald-400 rounded-md p-4 text-center flex justify-center cursor-pointer">Log In</button>

                  <button className="w-full text-emerald-400 font-bold my-2 bg-white border-2 border-emerald-400 rounded-md p-4 text-center flex justify-center cursor-pointer">Sign Up</button>

                </div>

                <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black"></div>
                  <p className="text-lg absolute text-black bg-white">or</p>
                </div>


                <div className="w-full text=black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex justify-center cursor-pointer">
                  <img src={Google_logo} alt="googlelogo" className="h-4 mt-1 mr-1" />
                  Sign In With Google
                </div>


                
                <div className="w-full flex justify-center"><p className=" text-sm font-normal  "> Dont have a account <span className=" font-semibold underline underline-offset-2 cursor-pointer " >Sign Up</span></p></div>




          

              </div>
        </div>
        
      </>
    )
  }
  
  export default Login