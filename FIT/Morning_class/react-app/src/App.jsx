
// import './App.css'

import Navbar from './components/Navbar'
import Cards from './components/Cards'

import { useState } from 'react'


const courses = [
  {title: 'Web Development', desc: 'Build Responsive WebSites', btn: 'Learn More', img: 'hero.png'},
  {title: 'SEO', desc: 'Rank Best WebSites', btn: 'Learn More', img: 'hero.png'},
  {title: 'Graphics', desc: 'Design Responsive WebSites', btn: 'Learn More', img: 'hero.png'},
  {title: 'AI', desc: 'Learn How to Train AI Model', btn: 'Learn More', img: 'hero.png'},
]


function App() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>

      

    <div className='min-h-screen bg-gray-500 overflow-hidden'>
         <Navbar />

          {/* set visibility */}

          <button className='bg-amber-400 text-gray-950 rounded-3xl px-4 py-1.5 absolute right-45 top-3 z-10 hover:bg-amber-300 transition-colors duration-700' onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide Cards' : 'Show Cards'}
          </button>

        {isVisible && ( 
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-2 m-1">
        
          {courses.map((course) =>(
            <Cards title={course.title} desc={course.desc} btn={course.btn} img={course.img} />
          ))}
        
         </div>)}
        
    </div>
       
    </>
  )
}

export default App
