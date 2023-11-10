import { Navbar } from './components';
import { Home, Sobre, Shots, Drinks, Madeby, LongDrinks } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Drinks />
      {/* <LongDrinks /> */}
      <Shots itemsPerPage={14} />
      <Madeby />
    </div>
  );
}

export default App;
