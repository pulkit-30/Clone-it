import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import SearchPage from './Components/SearchResults/SearchPage';
import ImagePage from './Components/SearchResults/ImagePage';
import SearchResults from './Components/SearchResults/SearchResults';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/search/image'>
          <SearchPage />
          <ImagePage />
        </Route>
        <Route path='/search'>
          <SearchPage />
          <SearchResults />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
