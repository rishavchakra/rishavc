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

            <div id="home-about-section">
                <div className="home-about-pic">
                    <div className="pic-container">
                        <img src="img/me.jpeg" alt="Rishav" />
                    </div>
                </div>

                <div className="home-about-desc">
                    <div className="home-about-desc-box">
                        <h3>
                            Hi! I'm Rishav Chakravarty.
                        </h3>
                        <p>
                            I'm a student at Dartmouth College.
                        </p>
                    </div>
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
