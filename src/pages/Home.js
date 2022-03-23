import "./../styles/App.scss";

import Section from "../components/section";
import HomeAbout from "../components/home/about";
import HomeCode from "../components/home/code";
import ContactForm from "../components/home/contact";

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
          <HomeAbout />
        </Section>

        <Section
            id="code"
            title="Code"
            img="bg-poly-grid"
        >
            <HomeCode />
        </Section>

        <Section id="art" title="Art" img="bg-stacked-waves">
            <div className="home-art-box">

            </div>
        </Section>

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
