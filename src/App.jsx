
import './App.css'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Loader from './Pages/Loader'
import Navbar from './Pages/Navbar'
import Projeler from './Pages/Projeler'

function App() {

  return (
    <>
    <Loader/>
    <Navbar/>
      <Home />
      <Projeler/>
      <Footer/>
    </>
  )
}

export default App
