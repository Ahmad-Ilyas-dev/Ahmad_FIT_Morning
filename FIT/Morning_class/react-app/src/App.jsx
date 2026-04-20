
// import './App.css'

import Navbar from './components/Navbar'
import Cards from './components/Cards'


const courses = [
  {title: 'Web Development', desc: 'Build Responsive WebSites', btn: 'Learn More'},
  {title: 'SEO', desc: 'Rank Best WebSites', btn: 'Learn More'},
  {title: 'Graphics', desc: 'Design Responsive WebSites', btn: 'Learn More'},
  {title: 'AI', desc: 'Learn How to Train AI Model', btn: 'Learn More'},
]


function App() {
  

  return (
    <>
    <div className='min-h-screen bg-gray-500 overflow-hidden'>
         <Navbar />
         <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-2 m-1">
        
          {courses.map((course) =>(
            <Cards title={course.title} desc={course.desc} btn={course.btn} />
          ))}
        
         </div>
    </div>
       
    </>
  )
}

export default App
