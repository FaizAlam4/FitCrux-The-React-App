import './App.css';
import Heading from './Heading';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Heading />
      <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/FitCrux-The-React-App" element={<Home/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
   
      <Footer />
    </div>
    </Router>
  );
}

export default App;
