import './App.css'
import { NavBar } from './components/NavBar'
import { HomeComponent } from './components/HomeView/HomeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { BrandComponent } from './components/BrandComponent'
import { ItemProvider } from './context/ItemContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <header className="bg-gray-600 p-4 flex justify-between items-center">
            <BrandComponent linkUrl="/" imageUrl="/images/tech-space-logo.png" />
            <NavBar />
          </header>
          <main>
          <ItemProvider>
              <Routes>
                  <Route path="/" element={<HomeComponent />} />
                  <Route path="/category/:id" element={<HomeComponent />} />
                  <Route path="/item/:itemId" element={<ItemDetail />} />
              </Routes>
            </ItemProvider>
          </main>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;


