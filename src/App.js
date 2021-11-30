import './reset.css';
import './App.css';

import CityScene from './components/graphics/city'
import SynthwaveScene from './components/graphics/synthwave'
import Gallery from './components/gallery'

function App() {
  return (
    <>
      <section id="Home" className="dark">
        <CityScene className="RenderCanvas subsection"/>
        <h1 className="InTransition">Rishav Chakravarty</h1>
      </section>

      <nav id="navbar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Code">Code</a>
        <a href="#Art">Art</a>
        <a href="#Work">Work</a>
        <a href="#Contact">Contact</a>
      </nav>

      <section id="About" className="dark">

      </section>

      <section id="Code" className="light">

      </section>

      <section id="Art" className="dark">
        <SynthwaveScene className="RenderCanvas subsection"/>
        <Gallery className="subsection"/>
      </section>

      <section id="Work" className="light">

      </section>

      <section id="Contact" className="dark">

      </section>
    </>
  );
}

export default App;
