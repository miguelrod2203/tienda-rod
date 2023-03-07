import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">

    <NavBar />
    
    {/* <ItemListContainer  /> */}
    
    <ItemDetailContainer itemId={'19'} />


    </div>
  );
}

export default App;
