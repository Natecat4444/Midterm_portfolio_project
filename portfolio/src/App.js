import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './tabs/Home';
import About from './tabs/About';
import Contact from './tabs/contact';
import MenuBar from './routing/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
