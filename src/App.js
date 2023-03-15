import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Error404 } from './components/Error404/Error404';
import { BannerInicio } from './components/BannerInicio/BannerInicio';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';



function App() {


  return (
  
    <CartProvider>

      <BrowserRouter>

        <NavBar />
        
        <Routes> 

          <Route path="/" element={ <BannerInicio /> }/>
          <Route path="/productos" element={ <ItemListContainer  /> }/>
          <Route path="/productos/:categoriaId" element={ <ItemListContainer  /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="*" element={ <Error404 /> }/>
          
        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
