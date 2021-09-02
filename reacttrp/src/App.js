import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      
      <NavBar />
      <Switch>
      <Route exact path='/'>
      <ItemListContainer />
      </Route>

      <Route exact path='/genero/:gener'>
        <ItemListContainer />
      </Route>

      <Route exact path='/detalle'>
      <ItemDetailContainer/>
      </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
