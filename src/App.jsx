import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import MarcasNav from './components/MarcasNav/MarcasNav.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HardwarePage from './pages/Hardware/HardwarePage.jsx';
import PerifericosPage from './pages/Perifericos/PerifericosPage.jsx';
import MonitoresPage from './pages/Monitores/MonitoresPage.jsx';
import NotebooksPage from './pages/Notebooks/NotebooksPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './pages/Cart/Cart.jsx';
import { CartProvider } from './components/Context/CartContext.jsx'; // importa CartProvider
import Checkout from './components/Checkout/Checkout.jsx';


function App() {
 

  return (
    <>
      <CartProvider> 
        <BrowserRouter>
          <NavBar />
          <MarcasNav />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
            <Route path="/pages/:cateName" element={<HardwarePage />} />
            <Route exact path='/pages/:cateName' element={<PerifericosPage />} />
            <Route exact path='/pages/:cateName' element={<MonitoresPage />} />
            <Route exact path='/pages/:cateName' element={<NotebooksPage />} />
            <Route exact path='/pages/Cart' element={<Cart />} />
            <Route exact path='/Checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
