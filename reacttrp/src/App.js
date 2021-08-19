import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <br />
      <ItemListContainer />
      </header>
    </div>
  );
}



export default App;