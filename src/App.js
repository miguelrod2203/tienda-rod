import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Contacto } from './components/Contacto/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes> 

        <Route path="/" element={ <ItemListContainer  /> }/>
        <Route path="/productos/:categoriaId" element={ <ItemListContainer  /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/nosotros" element={ <Nosotros /> }/>
        <Route path="/contacto" element={ <Contacto /> }/>
        <Route path="*" element={ <Navigate to={"/"}/> }/>
        {/* <Route path="*" element={ <Error 404 /> }/> */}
         
      </Routes>

    </BrowserRouter>

 
  );
}

export default App;
