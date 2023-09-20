import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Fabars ,FaTimes} from 'react-icons/fa'
import SociaLinks from "./components/SociaLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
          <SociaLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
