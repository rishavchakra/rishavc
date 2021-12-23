import './../../styles/App.scss';

import Section from '../section'

function Home() {
  return (
    <div className="App">
      <div className="name-page">
        <h1 className="name-title">Rishav Chakravarty</h1>
      </div>

      <div className="section-container">

        <Section title="About Me">

        </Section>

        <Section title="Code">

        </Section>

        <Section title="Art">

        </Section>

      </div>
    </div>
  );
}

export default Home;
