import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavigationBar from './components/navigation/navigationBar';
import WeatherInput from './containers/WeatherInputPage';
import FavoritesPage from './containers/weatherFavorites';

function App() {
  return (
    <div class='dark'>
    
    
    <Router>
    <NavigationBar/>
    <Switch>
    <Route exact path='/' component ={WeatherInput}/>
    <Route path='/FavoritesPage' component ={FavoritesPage}/> 
    </Switch>
    </Router>
    </div>
 
  );
}

export default App;
