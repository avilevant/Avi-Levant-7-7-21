import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation/navigationBar';
import WeatherInput from './containers/WeatherInputPage';
import FavoritesPage from './containers/weatherFavorites';
import { useSelector } from 'react-redux';

function App() {

  const mode=useSelector(state=> state.darkMode.dark);

  return (
    <div className={ mode ? 'dark' : ''}>
      <div className='h-screen dark:bg-gray-600'>
        <Router>
          <NavigationBar/>
            <Switch>
              <Route exact path='/' component ={WeatherInput}/>
              <Route path='/FavoritesPage' component ={FavoritesPage}/> 
            </Switch>
        </Router>
      </div>
    </div>
 
  );
}

export default App;
