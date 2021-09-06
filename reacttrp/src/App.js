import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart';



function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      
      <NavBar />
      <Switch>
      <Route exact path='/'>
      <ItemListContainer />
      </Route>
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/genero/:gener' component={ItemListContainer} />
      <Route exact path='/detalle/:id' component={ItemDetailContainer} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
