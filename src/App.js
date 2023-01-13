import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home.tsx';
import POS from './Components/POS.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="pos" element={<POS />} />
      </Routes>
    </div>
  );
}

export default App;
