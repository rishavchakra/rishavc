import "./../styles/App.scss";

import Section from "../components/section";
import ContactForm from "../components/contact";

function Home() {
  return (
    <div className="App">
      <div className="name-page">
        <h1 className="name-title">Rishav Chakravarty</h1>
      </div>

      <div className="section-container">
        <Section
          id="about"
          title="About Me"
          img="bg-stacked-steps"
          noflavor={true}
        >
          <div id="about-section">
            <div className="img-container">
              <div className="img-rect-container">
                <img className="img-rect" src="img/me.jpeg" alt="A picture of Rishav"/>
              </div>
            </div>

            <div id="about-desc">
              <h3>Hi! I'm Rishav.</h3>
              <p>I'm a student at Dartmouth College in Hanover, New Hampshire.</p>
            </div>

          </div>
        </Section>

        <Section id="code" title="Code" img="bg-poly-grid"></Section>

        <Section id="art" title="Art" img="bg-stacked-waves"></Section>

        <Section
          id="contact"
          title="Contact Me"
          noflavor={true}
          img="bg-stars"
        >
          <ContactForm />
        </Section>
      </div>
    </div>
  );
}

export default Home;
