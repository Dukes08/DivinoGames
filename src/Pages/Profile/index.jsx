function Profile(){

    return (
        <div className="w-full h-screen bg-emerald-400 flex justify-center items-center">
            <div className="bg-white w-96 h-96 shadow-md shadow-slate-950 flex flex-col items-center">
                <h1 className="text-3xl font-bold font-sans mt-8 text-emerald-400">Profile</h1>

                <div className="w-full flex flex-col items-center ">
                    
                    <input type="text" placeholder="Name" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>
                    
                    <input type="text" placeholder="Last Name" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>
                    
                    <input type="text" placeholder="Favorite Game" className=" w-4/5 text-black p-2 my-4 bg-transparent border-2 border-emerald-400 focus: outline-none"/>
                </div>

                <div className=" w-full text-center">

                    <button className="bg-emerald-400 p-4 w-4/5">Register</button>

                </div>



            </div>
        </div>
    )
}

export default Profile