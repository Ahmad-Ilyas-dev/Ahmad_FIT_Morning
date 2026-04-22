
import { useState } from 'react'



function Navbar(){
      const [count, setCount] = useState(0)

    return(
        <div className="flex justify-between bg-slate-900 text-white p-3 items-center fixed top-0 z-8 w-full">
            <p className="text-2xl font-bold">My<span className="text-amber-300">Brand</span></p>
            <nav className="flex gap-10 text-xs">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

            <a href="#" className="bg-amber-400 text-gray-950 rounded-3xl px-4 py-1.5 hover:bg-amber-300 transition-colors duration-700">Get Started</a>

            <a href="#">
                <button className='bg-amber-400 text-gray-950 rounded-3xl px-4 py-1.5 hover:bg-amber-300 transition-colors duration-700' onClick={() => setCount(count + 1)} >Count {count}</button>
            </a>
        </div>
    )
}

export default Navbar
