import { HashRouter, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MoviePage from "./MoviePage/MoviePage";
import TopRatedPage from "./TopRatedPage/TopRatedPage";
import TrendingPage from "./TrendingPage/TrendingPage";
import UpcomingPage from "./UpcomingPage/UpcomingPage";
import SearchPage from "./SearchPage/SearchPage";
import RequestToken from "./Authentication/RequestToken";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Authentication/Login/Login";
import WatchlistPage from "./WatchlistPage/WatchlistPage";
import PopularPeoplePage from "./PopularPeoplePage/PopularPeoplePage";
import PersonPage from "./PersonPage/PersonPage";
import ListPage from "./ListPage/ListPage";
import "./App.scss";

function App() {
  return (
    <div id="app">
      <HashRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/movies/top-rated" component={TopRatedPage} />
        <Route path="/movies/trending" component={TrendingPage} />
        <Route path="/movies/upcoming" component={UpcomingPage} />
        <Route path="/search/:term" component={SearchPage} />
        <Route path="/approved" component={RequestToken} />
        <Route path="/login" component={Login} />
        <Route path="/movies/watchlist" component={WatchlistPage} />
        <Route path="/people/:id" component={PersonPage} />
        <Route path="/list/:id" component={ListPage} />
        <Route path="/people" exact component={PopularPeoplePage} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
