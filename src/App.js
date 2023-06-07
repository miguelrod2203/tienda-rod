import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NavBar } from "./components/NavBar/NavBar";
import { BannerInicio } from './components/BannerInicio/BannerInicio';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { FormularioPago } from './components/FormularioPago/FormularioPago';
import { Error404 } from './components/Error404/Error404';
import { ToastContainer} from 'react-toastify';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer/Footer';
import { FavoritoProvider } from './context/FavoritoContext';
import { Fav } from './components/Favorito/Fav';


function App() {


  return (
  
    <FavoritoProvider>

      <CartProvider>

          <BrowserRouter>

            <NavBar />
            <ToastContainer />
            <Routes> 

              <Route path="/" element={ <BannerInicio /> }/>
              <Route path="/productos" element={ <ItemListContainer  /> }/>
              <Route path="/productos/:categoriaId" element={ <ItemListContainer  /> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
              <Route path="/cart" element={ <Cart /> }/>
              <Route path="/productos/Favoritos" element={ <Fav />}/>
              <Route path="/cart/formulario" element={ <FormularioPago /> }/>
              <Route path="*" element={ <Error404 /> }/>
              
            </Routes>
            <Footer />

          </BrowserRouter>
        
      </CartProvider>
      
    </FavoritoProvider>

  );
}

export default App;
