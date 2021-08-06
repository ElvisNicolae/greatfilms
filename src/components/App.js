import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" exact component={HomePage}>

        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
