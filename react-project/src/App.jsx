import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <>
      <header class="bg-gray-600 p-4 flex justify-between items-center">
          <img src="/images/tech-space-logo.png" alt="Logo de Techspace" class=" h-24 mr-5"/>
          <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenido a la tienda de TechSpace!" />
    </>
  )
}



export default App
