import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      <br />
      <ItemDetailContainer/>
      <ItemListContainer />
      </header>
    </div>
    
  );
}



export default App;
