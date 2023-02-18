import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">

    <NavBar/>

    <ItemListContainer greeting={'Hola. Estamos estudiando React JS.'} />


    </div>
  );
}

export default App;
