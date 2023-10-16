import { Navbar } from './components';
import { Home, Sobre, Shots, Drinks } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Shots />
      <Drinks />
    </div>
  );
}

export default App;
