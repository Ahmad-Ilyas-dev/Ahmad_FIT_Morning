


function Navbar(){
    return(
        <div className="flex justify-around bg-slate-900 text-white p-3 items-center fixed top-0 z-10 w-full">
            <p className="text-2xl font-bold">My<span className="text-amber-300">Brand</span></p>
            <nav className="flex gap-10 text-xs">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

            <a href="#" className="bg-amber-400 text-gray-950 rounded-3xl px-4 py-1.5 hover:bg-amber-300 transition-colors duration-700">Get Started</a>
        </div>
    )
}

export default Navbar
