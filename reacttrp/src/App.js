import './App.css';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      <br />
      <ItemListContainer> <ItemList /> </ItemListContainer>
      </header>
      <ItemCount />
    </div>
    
  );
}



export default App;
