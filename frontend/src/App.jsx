import { Navbar } from './components';
import { Home, Sobre, Shots, Drinks, Madeby } from './pages';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Drinks />
      <Shots itemsPerPage={14} />
      <Madeby />
    </div>
  );
}