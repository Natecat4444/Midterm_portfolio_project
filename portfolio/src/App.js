import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './tabs/Home';
import About from './tabs/About';
import Contact from './tabs/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home}/>
        <Route path= "About" element={About}/>
        <Route path="Contact" element={Contact}/>
      </Routes>
    </div>
  );
}

export default App;
