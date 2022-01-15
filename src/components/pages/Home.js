import './../../styles/App.scss';

import Section from '../section'

function Home() {
  return (
    <div className="App">
      <div className="name-page">
        <h1 className="name-title">Rishav Chakravarty</h1>
      </div>

      <div className="section-container">

        <Section id="about" title="About Me" img="bg-stacked-steps">

        </Section>

        <Section id="code" title="Code" img="bg-poly-grid">

        </Section>

        <Section id="art" title="Art" img="bg-stacked-waves">

        </Section>

        <Section id="contact" title="Contact Me" noflavor={true} img='bg-stars'>

        </Section>

      </div>
    </div>
  );
}

export default Home;
