import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage';
import TopRatedPage from './TopRatedPage/TopRatedPage';
import TrendingPage from './TrendingPage/TrendingPage';
import UpcomingPage from './UpcomingPage/UpcomingPage';
import SearchPage from './SearchPage/SearchPage';
import RequestToken from './Authentication/RequestToken';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Authentication/Login/Login';
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
        <Route path="/approved" component={RequestToken} />
        <Route path="/login" component={Login} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
