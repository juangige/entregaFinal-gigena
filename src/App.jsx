import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import MarcasNav from './components/MarcasNav/MarcasNav.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <MarcasNav />      
      <ItemListContainer greeting={'Lista de productos'}/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
