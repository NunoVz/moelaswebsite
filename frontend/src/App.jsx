import { Navbar } from './components';
import { Home, Sobre, LongDrinks, Shots, Madeby } from './pages';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <LongDrinks />
      <Shots />
      <Madeby />
    </div>
  );
}