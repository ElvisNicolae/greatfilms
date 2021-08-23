import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage}>
        
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
