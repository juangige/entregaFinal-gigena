import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import MarcasNav from './components/MarcasNav/MarcasNav.jsx';

function App() {

  return (
    <>
      <NavBar />
      <MarcasNav />      
      <ItemListContainer greeting={'Lista de productos'}/>
      <ItemCount initial={0} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada:', cantidad)} />
    </>
  );
}

export default App;
