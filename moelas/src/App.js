import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Mem from './Memorias/Mem';
import Prec from './Precario/Prec';
import Shots from './Shots/Shots';
import Sobre from './Sobre/Sobre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/shots" element={<Shots />} />
        <Route path="/precario" element={<Prec />} />
        <Route path="/memorias" element={<Mem />} />
      </Routes>
    </Router>
  );
}

export default App;
