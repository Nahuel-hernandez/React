import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      <br />
      <ItemListContainer />
      </header>
      <ItemCount />
    </div>
    
  );
}



export default App;
