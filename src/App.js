import './reset.css';
import './App.css';

import React from 'react'

import './locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll'

import CityScene from './components/graphics/city'
import SynthwaveScene from './components/graphics/synthwave'
import Gallery from './components/gallery'

function AppOld() {
  return (
    <>
      <section id="Home" className="dark">
        <h1 className="sectionTitle">Rishav Chakravarty</h1>
        <CityScene className="RenderCanvas subsection"/>
      </section>

      <nav id="navbar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Code">Code</a>
        <a href="#Art">Art</a>
        <a href="#Work">Work</a>
        <a href="#Contact">Contact</a>
      </nav>

      <section id="About">
        <h1 className="About">About Me</h1>
      </section>

      <section id="Code">
        <h1 className="sectionTitle">Code</h1>
      </section>

      <section id="Art">
        <h1 className="sectionTitle">Art</h1>
        <SynthwaveScene className="RenderCanvas subsection"/>
        <Gallery className="subsection"/>
      </section>

      <section id="Work">

      </section>

      <section id="Contact">

      </section>
    </>
  );
}

function App() {
  return (<>
    <div className="section" id="Home">
      <CityScene />
      <h1 data-scroll className="sectionTitle">Rishav Chakravarty</h1>
    </div>

    <nav id="navbar">
      <a className="navlink" href="#Home">Home</a>
      <a className="navlink" href="#About">About</a>
      <a className="navlink" href="#Code">Code</a>
      <a className="navlink" href="#Work">Work</a>
      <a className="navlink" href="#Art">Art</a>
      <a className="navlink" href="#Contact">Contact</a>
    </nav>

    <div className="section" id="About">

    </div>

    <div className="section" id="Code">

    </div>

    <div className="section" id="Work">

    </div>

    <div className="section" id="Art">
      <h1>Art</h1>
      <SynthwaveScene />
    </div>

    <div className="section" id="Contact">

    </div>
  </>);
}

export default App;
