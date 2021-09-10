import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage';
import TopRatedPage from './TopRatedPage/TopRatedPage';
import TrendingPage from './TrendingPage/TrendingPage';
import UpcomingPage from './UpcomingPage/UpcomingPage';
import SearchPage from './SearchPage/SearchPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./App.scss";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/movies/top-rated" component={TopRatedPage} />
        <Route path="/movies/trending" component={TrendingPage} />
        <Route path="/movies/upcoming" component={UpcomingPage} />
        <Route path="/search/:term" component={SearchPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
