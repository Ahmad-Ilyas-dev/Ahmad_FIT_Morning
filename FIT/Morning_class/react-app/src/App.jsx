
// import './App.css'

import Navbar from './components/Navbar'
import Cards from './components/Cards'


function App() {
  

  return (
    <>
    <div className='min-h-screen bg-gray-500 overflow-hidden'>
         <Navbar />
         <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center p-5 m-3">
         <Cards title='Web Development' desc='Build Responsive WebSites' />
         <Cards title='SEO' desc='Rank Best WebSites' />
         <Cards title='Graphics' desc='Design Responsive WebSites' />
         </div>
    </div>
       
    </>
  )
}

export default App
