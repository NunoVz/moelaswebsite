import { Navbar } from './components';
import { Home, Sobre, Shots, Drinks, Madeby } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Drinks />
      <Shots />
      <Madeby/>
    </div>
  );
}

export default App;
