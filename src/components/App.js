import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./App.scss";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage}>
        
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
