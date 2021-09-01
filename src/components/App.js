import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./App.scss";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        
        <Route path="/movie" component={MoviePage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
