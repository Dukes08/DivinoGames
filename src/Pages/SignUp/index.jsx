import {Link} from "react-router-dom"
function SignUp(){

    const handleSignWithGoogle = async()=>{}

    return(
        <div className="w-full h-screen bg-emerald-400 flex justify-center items-center">
            <div className="bg-white w-2/5 h-5/6 shadow-md shadow-slate-950 flex flex-col items-center">
                <h1 className="text-3xl font-bold font-sans mt-12 text-emerald-400">Sign Up</h1>

                <div className="w-full flex flex-col items-center">
                    <input type="text" placeholder="Name" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>


                    <input type="text" placeholder="Last Name" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>


                    <input type="text" placeholder="Username" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>


                    <input type="email" placeholder="Email" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>


                    <input type="password" placeholder="Password" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>


                    <input type="text" placeholder="Favorite Game" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>
                </div>

                <div className=" w-full text-center">

                    <button className="bg-emerald-400 p-4 w-4/5">Register</button>

                </div>

                
                <Link to="/" className="mt-4">
                Already have an account? <span className="text-emerald-400">Login</span>
                </Link>

                </div> 
        </div>
    )

}

export default SignUp